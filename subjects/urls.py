from django.urls import path
from .views import SubjectListView, SubjectDetailView

urlpatterns = [
    path('', SubjectListView.as_view()),
    path('<slug:slug>/', SubjectDetailView.as_view()),
]