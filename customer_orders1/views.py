from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Notes
from .orders_serializer import NoteSerilizers

# Create your views here.
@api_view(['GET'])
def get_notes(request):
    user = request.user
    notes = Notes.objects.filter(owner=user)
    serilizer = NoteSerilizers(notes, many=true)
