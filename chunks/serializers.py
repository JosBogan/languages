from rest_framework import serializers

from .models import Chunk
from pages.models import Page
from questions.models import Question
from vocab.models import Vocab

class VocabSerializer(serializers.ModelSerializer):

    class Meta:
        model = Vocab
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = '__all__'

class PageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Page
        fields = '__all__'

class ChunkSerializer(serializers.ModelSerializer):

    vocab = VocabSerializer(many=True)
    questions = QuestionSerializer(many=True)
    pages = PageSerializer(many=True)

    class Meta:
        model = Chunk
        fields = '__all__'
