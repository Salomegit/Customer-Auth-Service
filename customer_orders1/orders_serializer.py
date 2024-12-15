from rest_framework import serializers
from .models import Notes

class NoteSerilizers(serializers.modelSerializer):
    class Meta