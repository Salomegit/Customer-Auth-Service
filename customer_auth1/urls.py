from django.urls import path
from .views import BuildAccessTokenCookies ,CustomRefreshToken  # Import the custom view

urlpatterns = [
    path('token/', BuildAccessTokenCookies.as_view(), name='CustomTokenObtainAccess'),
        path('token/refresh', CustomRefreshToken.as_view(), name='CustomRefreshToken'),

]