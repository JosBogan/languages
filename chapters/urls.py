from django.urls import path
from .views import ChapterDetailView

urlpatterns = [
    path('<slug:slug>/', ChapterDetailView.as_view()),
]