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

from .serializers import UserSerializer

User = get_user_model()

# Create your views here.

class RegisterView(APIView):

    def post(self, request):
        serialized_user = UserSerializer(data=request.data)
        if serialized_user.is_valid():
            serialized_user.save()
            return Response({'message': 'registration sucessful'})
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
            user = User.objects.get(pk=request.user.id)
            serialized_user = UserSerializer(user)
            return Response(serialized_user.data)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid Credentials'})


class UserAddModuleView(APIView):

    permission_classes = (IsAuthenticated, )

    def put(self, request):
        try:
            user = User.objects.get(pk=request.user.id)
            # pre_serialized_user = UserSerializer(user)
            user.current_modules.add(request.data['module'])
            print(user.current_modules)
            user.save()
            # if serialized_user.is_valid():
            #     serialized_user.data['current_modules'].append(request.data['module'])
            #     serialized_user.save()
            return Response(status=HTTP_202_ACCEPTED)
            # return Response(serialized_user.errors, status=HTTP_422_UNPROCESSABLE_ENTITY)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid Credentials'})