from rest_framework import serializers

from .models import Subject
from modules.models import Module

class ModuleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Module
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):

    modules = ModuleSerializer(many=True)

    class Meta:
        model = Subject
        fields = '__all__'