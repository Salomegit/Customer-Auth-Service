
# Create your views here.
from django.shortcuts import render
from django.http import HttpRequest,HttpResponse,JsonResponse
from rest_framework_simplejwt.views import TokenObtainPairView,TokenObtainPairView
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['POST'])
def custom_token_obtain_pair(request):
    try:
        # Use the default TokenObtainPairSerializer to validate and generate tokens
        serializer = TokenObtainPairSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        
        tokens = serializer.validated_data  # Contains 'access' and 'refresh'

        access_token = tokens['access']
        refresh_token = tokens['refresh']

        # Create a response
        res = Response({'success': True}, status=status.HTTP_200_OK)

        # Set access token cookie
        res.set_cookie(
            key='access_token',
            value=access_token,
            httponly=True,
            secure=True,
            samesite='None',
            path='/'
        )

        # Set refresh token cookie
        res.set_cookie(
            key='refresh_token',
            value=refresh_token,
            httponly=True,
            secure=True,
            samesite='None',
            path='/'
        )

        return res

    except Exception as e:
        return Response({'success': False, 'error': str(e)}, status=status.HTTP_401_UNAUTHORIZED)