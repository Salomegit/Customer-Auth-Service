
# Create your views here.
from django.shortcuts import render
from django.http import HttpRequest,HttpResponse,JsonResponse

def profile(request):
    return render (request, "profile.html")
# Create your views here.