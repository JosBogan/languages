# pylint: disable=no-member


from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND

from .models import Subject
from .serializers import SubjectSerializer

# Create your views here.

class SubjectListView(APIView):
    
    def get(self, _request):
        subjects = Subject.objects.all()
        serialized_subjects = SubjectSerializer(subjects, many=True)
        return Response(serialized_subjects.data)

class SubjectDetailView(APIView):

    def get(self, _request, slug):
        try: 
            subject = Subject.objects.get(data_name=slug)
            serialized_subject = SubjectSerializer(subject)
            return Response(serialized_subject.data)
        except Subject.DoesNotExist:
            return Response({'message':'Not Found'}, status=HTTP_404_NOT_FOUND)
