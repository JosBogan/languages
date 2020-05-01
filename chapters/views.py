# pylint: disable=no-member

from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND

from django.db.models import Q

from .models import Chapter
from modules.models import Module
from .serializers import ChapterSerializer, ModuleSerializer

class ChapterDetailView(APIView):

    def get(self, _request, slug):
        try:
            chapter = Chapter.objects.get(data_name=slug)
            serialized_chapter = ChapterSerializer(chapter)
            return Response(serialized_chapter.data)
        except Chapter.DoesNotExist:
            return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

class ChapterSoloLookup(APIView):

    def get(self, _request, **kwargs):
        try:
            module = Module.objects.get(data_name=kwargs['module_slug'])
            serialized_module = ModuleSerializer(module)
            chapter = Chapter.objects.get(
                Q(data_name=kwargs['chapter_slug']) & Q(module=serialized_module.data['id'])
                )
            serialized_chapter = ChapterSerializer(chapter)
            return Response(serialized_chapter.data)
        except Module.DoesNotExist:
            return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)