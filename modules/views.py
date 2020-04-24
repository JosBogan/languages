# pylint: disable=no-member


from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND

from .models import Module
from .serializers import ModuleSerializer

# Create your views here.

class ModulesListView(APIView):
    
    def get(self, _request):
        modules = Module.objects.all()
        serialized_modules = ModuleSerializer(modules, many=True)
        print(serialized_modules.data)
        return Response(serialized_modules.data)

class ModuleDetailView(APIView):

    def get(self, request, pk):
        try:
            module = Module.objects.get(pk=pk)
            serialized_module = ModuleSerializer(module)
            return Response(serialized_module.data)
        except Module.DoesNotExist:
            return Response({'message': 'Not Found'}, status=HTTP_404_NOT_FOUND)