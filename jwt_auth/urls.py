from django.urls import path
from .views import RegisterView, LoginView, UserDetailView, NewProgressModule

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/new_progress_module/<int:pk>/', NewProgressModule.as_view()),
    # path('user/chunk/', UserAddCompletedChunk.as_view()),
    path('user/', UserDetailView.as_view()),
]