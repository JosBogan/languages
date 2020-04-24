from django.urls import path
from .views import ModulesListView, ModuleDetailView

urlpatterns = [
    path('', ModulesListView.as_view()),
    path('<int:pk>/', ModuleDetailView.as_view()),
]