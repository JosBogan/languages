from rest_framework import serializers

from .models import Module
from chapters.models import Chapter
from chunks.models import Chunk

class ChunkSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Chunk
        fields = '__all__'

class ChapterSerializer(serializers.ModelSerializer):

    chunks = ChunkSerializer(many=True)
    
    class Meta:
        model = Chapter
        fields = '__all__'

class ModuleSerializer(serializers.ModelSerializer):

    chapters = ChapterSerializer(many=True)

    class Meta:
        model = Module
        fields = '__all__'