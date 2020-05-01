# pylint: disable=no-member

from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND

from .models import Chunk
from .serializers import ChunkSerializer


# Create your views here.

class ChunkDetailView(APIView):

    def get(self, _request, slug):
        try:
            chunk = Chunk.objects.get(data_name=slug)
            serialized_chunk = ChunkSerializer(chunk)
            return Response(serialized_chunk.data)
        except Chunk.DoesNotExist:
            return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)

class ChunkPkDetailView(APIView):

    def get(self, _request, pk):
        try:
            chunk = Chunk.objects.get(pk=pk)
            serialized_chunk = ChunkSerializer(chunk)
            return Response(serialized_chunk.data)
        except Chunk.DoesNotExist:
            return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)
