from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.core.exceptions import ValidationError
# import django.contrib.auth.password_validation as validations

User = get_user_model()
from .models import UserProgress, ModuleProgress, ChapterProgress, ChunkProgress
from chapters.models import Chapter
from chunks.models import Chunk

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

class UserProgressPopulatedSerializer(serializers.ModelSerializer):

    module_progress = ModuleProgressSerializer(many=True)

    class Meta:
        model = UserProgress
        fields = '__all__'

class UserProgressSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProgress
        fields = '__all__'

class UserPopulatedSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)
    password_confirmation = serializers.CharField(write_only=True)
    progression = UserProgressPopulatedSerializer()

    class Meta:
        model = User
        fields = '__all__'

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

# class ChunkSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Chunk
#         fields = '__all__'

# class ChapterSerializer(serializers.ModelSerializer):

#     chunks = ChunkSerializer(many=True)

#     class Meta:
#         model = Chapter
#         fields = '__all__'
