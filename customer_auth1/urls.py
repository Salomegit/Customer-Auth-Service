from django.urls import path
from .views import BuildAccessTokenCookies, CustomRefreshToken, logout, is_authenticated,  register_user # Import the custom view

urlpatterns = [
    path('token/', BuildAccessTokenCookies.as_view(), name='CustomTokenObtainAccess'),
    path('token/refresh', CustomRefreshToken.as_view(), name='CustomRefreshToken'),
    path('logout/', logout, name='logout'),
    path('authenticated/',is_authenticated,name='is_authenticated') ,
    # path('is_not_authenticated/',is_not_authenticated,name='is_authenticated') 
    path('register',register_user,name='register')

]