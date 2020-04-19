# pylint: disable=no-member

from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_201_CREATED, HTTP_422_UNPROCESSABLE_ENTITY, HTTP_401_UNAUTHORIZED, HTTP_202_ACCEPTED, HTTP_404_NOT_FOUND, HTTP_204_NO_CONTENT

from .serializers import CharacterSerializer

from .models import Character

# Create your views here.

class CharacterListView(APIView):

    def get(self, _request):
        characters = Character.objects.all()
        serialized_characters = CharacterSerializer(characters, many=True)
        return Response(serialized_characters.data)