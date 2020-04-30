# pylint: disable=no-member

from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND

from .models import Chapter
from .serializers import ChapterSerializer

class ChapterDetailView(APIView):

    def get(self, _request, slug):
        try:
            chapter = Chapter.objects.get(data_name=slug)
            serialized_chapter = ChapterSerializer(chapter)
            return Response(serialized_chapter.data)
        except Chapter.DoesNotExist:
            return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)
