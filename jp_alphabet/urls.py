from django.urls import path
from .views import CharacterListView

urlpatterns = [
    path('', CharacterListView.as_view()),
]