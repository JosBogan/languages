from django.urls import path
from .views import ChunkDetailView, ChunkPkDetailView

urlpatterns = [
    path('<slug:slug>/', ChunkDetailView.as_view()),
    path('id/<int:pk>/', ChunkPkDetailView.as_view()),
]