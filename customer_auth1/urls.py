from django.urls import path
from .views import BuildAccessTokenCookies  # Import the custom view

urlpatterns = [
    path('token/', BuildAccessTokenCookies.as_view(), name='CustomTokenObtainPairView'),
]