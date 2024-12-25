from django.urls import path
from .views import BuildAccessTokenCookies, CustomRefreshToken, logout, is_authenticated # Import the custom view

urlpatterns = [
    path('token/', BuildAccessTokenCookies.as_view(), name='CustomTokenObtainAccess'),
    path('token/refresh', CustomRefreshToken.as_view(), name='CustomRefreshToken'),
    path('logout/', logout, name='logout'),
    path('authenticated/',is_authenticated,name='is_authenticated') 
]