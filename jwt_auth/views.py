# pylint: disable=no-member

from datetime import timedelta, datetime

from django.shortcuts import render
from django.contrib.auth import get_user_model 
from django.conf import settings


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from rest_framework.status import HTTP_422_UNPROCESSABLE_ENTITY, HTTP_202_ACCEPTED
from rest_framework.permissions import IsAuthenticated

import jwt

from .serializers import UserSerializer, UserProgressSerializer, ModuleProgressSerializer, ModuleNonPopProgressSerializer, ChapterNonPopProgressSerializer, ChunkNonPopProgressSerializer, UserPopulatedSerializer

# from chunks.models import Chunk
# from chapters.models import Chapter

from modules.models import Module
from chunks.models import Chunk
from .models import UserProgress
User = get_user_model()

# Create your views here.

class RegisterView(APIView):

    def post(self, request):
        serialized_user = UserSerializer(data=request.data)
        if serialized_user.is_valid():
            serialized_user.save()
            # print(serialized_user.data)
            serialized_progression = UserProgressSerializer(data={'user_id': serialized_user.data['id']})
            if serialized_progression.is_valid():
                serialized_progression.save()
                return Response({'message': 'registration sucessful'})
            return Response(serialized_progression.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
        return Response(serialized_user.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class LoginView(APIView):

    def post(self, request):

        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = User.objects.get(email=email)

            if not user.check_password(password):
                raise PermissionDenied({'message': 'Invalid Credentials '})

            dt = datetime.now() + timedelta(days=7)

            token = jwt.encode({'sub': user.id, 'exp': int(dt.strftime('%s'))}, settings.SECRET_KEY, algorithm='HS256')
            return Response({'token': token, 'message': f'Welcome back {user.username}'})

        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid Credentials'})

class UserDetailView(APIView):

    permission_classes = (IsAuthenticated, )

    def get(self, request):
        try:
            # print(print([x.id for x in request.user.progression.module_progress.all()]))
            user = User.objects.get(pk=request.user.id)
            serialized_user = UserPopulatedSerializer(user)
            return Response(serialized_user.data)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid Credentials'})

class NewProgressModule(APIView):

    permission_classes = (IsAuthenticated, )

    def post(self, request, pk):
        if pk in [x.module_id.id for x in request.user.progression.module_progress.all()]:
            return Response({'message': 'Module progress already exists'}, status=HTTP_422_UNPROCESSABLE_ENTITY)
        module_progress = {}
        module = Module.objects.get(pk=pk)
        module_progress['user_progress_id'] = request.user.progression.id
        module_progress['module_id'] = Module.objects.get(pk=pk).id
        # module_progress['chapter_progress'] = [
        #     {'chapter_id': x.id, 
        #     'chunk_progress': [{'chunk_id': i.id} for i in x.chunks.all()]
        #     } for x in module.chapters.all()]
        serialized_module_progress = ModuleNonPopProgressSerializer(data=module_progress)
        if serialized_module_progress.is_valid():
            serialized_module_progress.save()
            for chapter in module.chapters.all():
                chapter_progress = {}
                chapter_progress['chapter_id'] = chapter.id
                chapter_progress['user_module_progress_id'] = serialized_module_progress.data['id']
                serialized_chapter_progress = ChapterNonPopProgressSerializer(data=chapter_progress)
                if serialized_chapter_progress.is_valid():
                    serialized_chapter_progress.save()
                    for chunk in chapter.chunks.all():
                        chunk_progress = {}
                        chunk_progress['chunk_id'] = chunk.id
                        chunk_progress['user_chapter_progress_id'] = serialized_chapter_progress.data['id']
                        serialized_chunk_progress = ChunkNonPopProgressSerializer(data=chunk_progress)
                        if serialized_chunk_progress.is_valid():
                            serialized_chunk_progress.save()
                        else:
                            return Response(serialized_chunk_progress.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
                else:
                    return Response(serialized_chapter_progress.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
            return Response({'message': 'Module progress add sucessfull'})
        return Response(serialized_module_progress.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)

class ChunkCompleted(APIView):

    permission_classes = (IsAuthenticated, )

    def put(self, request, pk):
        chunk = Chunk.objects.get(pk=pk)
        progress_module = request.user.progression.module_progress.get(module_id=request.data['module_id'])
        progress_chapter = progress_module.chapter_progress.get(chapter_id=chunk.chapter.id)
        progress_chunk = progress_chapter.chunk_progress.get(chunk_id=pk)
        progress_chunk.completed = True
        progress_chunk.save()
        # Save Chunk Progress
        chunks_completed_value = progress_chapter.chunk_progress.values_list('completed', flat=True)
        chunks_completed = [x for x in chunks_completed_value if x == True]
        chapter_percent = (len(chunks_completed) / len(chunks_completed_value)) * 100
        progress_chapter.progress = chapter_percent
        progress_chapter.save()
        # Add Chapter completion in model and apply percentage here
        if chapter_percent == 100:
            progress_chapter.completed = True
            progress_chapter.save()
            chapters_completed_value = progress_module.chapter_progress.values_list('completed', flat=True)
            chapters_completed = [x for x in chapters_completed_value if x == True]
            if len(chapters_completed_value) == len(chapters_completed):
                progress_module.completed == True
                progress_module.save()
        chapters_completion_progress = progress_module.chapter_progress.values_list('progress', flat=True)
        module_percent = (sum(chapters_completion_progress) / (len(chapters_completion_progress) * 100)) * 100
        progress_module.progress = module_percent
        progress_module.save()
        user = User.objects.get(pk=request.user.id)
        serialized_user = UserPopulatedSerializer(user)
        return Response(serialized_user.data)



# class UserAddModuleView(APIView):

#     permission_classes = (IsAuthenticated, )

#     def put(self, request):
#         try:
#             user = User.objects.get(pk=request.user.id)
#             # pre_serialized_user = UserSerializer(user)
#             user.current_modules.add(request.data['module'])
#             print(user.current_modules)
#             user.save()
#             # if serialized_user.is_valid():
#             #     serialized_user.data['current_modules'].append(request.data['module'])
#             #     serialized_user.save()
#             return Response(status=HTTP_202_ACCEPTED)
#             # return Response(serialized_user.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
#         except User.DoesNotExist:
#             raise PermissionDenied({'message': 'Invalid Credentials'})

# class UserAddCompletedChunk(APIView):

    # permission_classes = (IsAuthenticated, )

    # def put(self, request):
    #     try:
    #         user = User.objects.get(pk=request.user.id)
    #         user.completed_chunks.add(request.data['chunk'])
    #         chunk = Chunk.objects.get(pk=request.data['chunk'])
    #         chapter = Chapter.objects.get(pk=chunk.chapter.id)
    #         serialized_chapter = ChapterSerializer(chapter)
    #         user.save()
    #         serialized_user = UserSerializer(user)
    #         return Response(serialized_user.data)
    #     except User.DoesNotExist:
    #         raise PermissionDenied({'message': 'Invalid Credentials'})