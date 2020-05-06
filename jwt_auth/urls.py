from django.urls import path
from .views import RegisterView, LoginView, UserDetailView, UserAddModuleView, UserAddCompletedChunk

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/module/', UserAddModuleView.as_view()),
    path('user/chunk/', UserAddCompletedChunk.as_view()),
    path('user/', UserDetailView.as_view()),
]