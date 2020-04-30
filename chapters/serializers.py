from rest_framework import serializers

from .models import Chapter
from chunks.models import Chunk
from pages.models import Page

class PageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Page
        fields = '__all__'

class ChunkSerializer(serializers.ModelSerializer):

    pages = PageSerializer(many=True)

    class Meta:
        model = Chunk
        fields = '__all__'

class ChapterSerializer(serializers.ModelSerializer):

    chunks = ChunkSerializer(many=True)

    class Meta:
        model = Chapter
        fields = '__all__'