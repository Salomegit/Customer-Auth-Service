
# Create your views here.
from django.shortcuts import render
from django.http import HttpRequest,HttpResponse,JsonResponse
from rest_framework_simplejwt.views import TokenObtainPairView,TokenObtainPairView
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt

class BuildAccessTokenCookies(TokenObtainPairView):
    def post(self, request, *args,**kwargs):

        try:
            response = super().post(request,*args,**kwargs)
            tokens = response.data

            access_token = tokens['access']
            refresh_token = tokens['refresh']

            res = Response()

            res.data = {'success':True,
            
            }

            res.set_cookie(
                key = 'access_token',
                value=access_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/'
            )

            res.set_cookie(
                key = 'refresh_token',
                value=refresh_token,
                httponly=True,
                secure=True,
                samesite='None',
                path='/auth/token/refresh/',
                max_age=60 * 60 * 24 * 7  
            )

              # Include CSRF Token
            # csrf_token = get_token(request)
            # res.data['csrf_token'] = csrf_token

            return res
            
        except KeyError as e:
            return Response({'success': False, 'error': str(e)}, status=400)
        except Exception as e:
            return Response({'success': False, 'error': 'Something went wrong'}, status=500)