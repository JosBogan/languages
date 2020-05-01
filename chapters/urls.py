from django.urls import path
from .views import ChapterDetailView, ChapterSoloLookup

urlpatterns = [
    path('<slug:slug>/', ChapterDetailView.as_view()),
    path('<slug:module_slug>/<slug:chapter_slug>/', ChapterSoloLookup.as_view()),
]