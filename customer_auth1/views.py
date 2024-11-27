
# Create your views here.
from django.shortcuts import render
from django.http import HttpRequest,HttpResponse,JsonResponse

def homepage(request: HttpRequest):
    return JsonResponse({'msg':"hello"})
# Create your views here.