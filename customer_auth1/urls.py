from django.urls import path
from . import views

urlpatterns = [
    path('token/', views.custom_token_obtain_pair, name='CustomTokenObtainPairView'),
]