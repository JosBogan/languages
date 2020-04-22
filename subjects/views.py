# pylint: disable=no-member


from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Subject
from .serializers import SubjectSerializer

# Create your views here.

class SubjectListView(APIView):
    
    def get(self, _request):
        subjects = Subject.objects.all()
        serialized_subjects = SubjectSerializer(subjects, many=True)
        print(serialized_subjects.data)
        return Response(serialized_subjects.data)