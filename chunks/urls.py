from django.urls import path
from .views import ChunkDetailView

urlpatterns = [
    path('<slug:slug>/', ChunkDetailView.as_view()),
]