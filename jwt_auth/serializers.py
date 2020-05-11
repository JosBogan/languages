from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
# import django.contrib.auth.password_validation as validations

User = get_user_model()
from .models import UserProgress, ModuleProgress, ChapterProgress, ChunkProgress
from chapters.models import Chapter
from chunks.models import Chunk
from modules.models import Module

# Non populated Serializers for saving progression

class ChunkNonPopProgressSerializer(serializers.ModelSerializer):

    class Meta:
        model = ChunkProgress
        fields = '__all__'

class ChapterNonPopProgressSerializer(serializers.ModelSerializer):

    class Meta:
        model = ChapterProgress
        fields = '__all__'

class ModuleNonPopProgressSerializer(serializers.ModelSerializer):

    class Meta:
        model = ModuleProgress
        fields = '__all__'

#  Populated Serializers for getting

class ChunkProgressSerializer(serializers.ModelSerializer):

    class Meta:
        model = ChunkProgress
        fields = '__all__'

class ChapterProgressSerializer(serializers.ModelSerializer):

    chunk_progress = ChunkProgressSerializer(many=True)

    class Meta:
        model = ChapterProgress
        fields = '__all__'

class ModuleProgressSerializer(serializers.ModelSerializer):

    chapter_progress = ChapterProgressSerializer(many=True)

    class Meta:
        model = ModuleProgress
        fields = '__all__'

# User Serializer with progression populated for 'get'

class UserProgressPopulatedSerializer(serializers.ModelSerializer):

    module_progress = ModuleProgressSerializer(many=True)

    class Meta:
        model = UserProgress
        fields = '__all__'

# User Serializer without progress populated

class UserProgressSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProgress
        fields = '__all__'

# Main user Get serializer

class UserPopulatedSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)
    progression = UserProgressPopulatedSerializer()

    class Meta:
        model = User
        fields = '__all__'

# User Register Serializer

class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)

    def validate(self, data):

        password = data.pop('password')
        password_confirmation = data.pop('password_confirmation')

        if password != password_confirmation:
            raise ValidationError({'password_confirmation': 'Does Not Match'})

        # try:
        #     validations.validate_password(password=password)
        # except ValidationError as err:
        #     raise serializers.ValidationError({'password_confirmation': err.message})

        data['password'] = make_password(password)

        return data
    
    # progression = UserProgressPopulatedSerializer()

    class Meta:
        model = User
        fields = '__all__'

#  Serializers for User page, Progress with module/Chapter/Chunk Id populated

class ModuleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Module
        fields = ('name', 'subject')

class ChapterSerializer(serializers.ModelSerializer):

    class Meta:
        model = Chapter
        fields = ('name', )

class ChunkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Chunk
        fields = ('name', )

class ChunkProgressWithChunkSerializer(serializers.ModelSerializer):

    chunk_id = ChunkSerializer()

    class Meta:
        model = ChunkProgress
        fields = '__all__'

class ChapterProgressWithChapterSerializer(serializers.ModelSerializer):

    chapter_id = ChapterSerializer()
    chunk_progress = ChunkProgressWithChunkSerializer(many=True)

    class Meta:
        model = ChapterProgress
        fields = '__all__'

class ModuleProgressWithModuleSerializer(serializers.ModelSerializer):

    module_id = ModuleSerializer()
    chapter_progress = ChapterProgressWithChapterSerializer(many=True)

    class Meta:
        model = ModuleProgress
        fields = '__all__'

class UserProgressWithDataPopulatedSerializer(serializers.ModelSerializer):

    module_progress = ModuleProgressWithModuleSerializer(many=True)

    class Meta:
        model = UserProgress
        fields = '__all__'