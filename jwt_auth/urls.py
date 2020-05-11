from django.urls import path
from .views import RegisterView, LoginView, UserDetailView, NewProgressModule, ChunkCompleted, PopulatedUserProgression

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/progress/module/<int:pk>/', NewProgressModule.as_view()),
    path('user/progress/chunk/<int:pk>/', ChunkCompleted.as_view()),
    # path('user/chunk/', UserAddCompletedChunk.as_view()),
    path('user/progress/', PopulatedUserProgression.as_view()),
    path('user/', UserDetailView.as_view()),
]