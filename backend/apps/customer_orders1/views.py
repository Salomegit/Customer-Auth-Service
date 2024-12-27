from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from .models import Notes
from .orders_serializer import NoteSerializers
from rest_framework.permissions import IsAuthenticated,AllowAny


# Create your views here.
@api_view(['GET'])
@permission_classes([IsAuthenticated])

def get_notes(request):
    user = request.user
    notes = Notes.objects.filter(owner=user)
    serializer = NoteSerializers(notes, many=True)

    return Response(serializer.data)
