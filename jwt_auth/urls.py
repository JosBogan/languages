from django.urls import path
from .views import RegisterView, LoginView, UserDetailView, UserAddModuleView

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('user/module/', UserAddModuleView.as_view()),
    path('user/', UserDetailView.as_view()),
]