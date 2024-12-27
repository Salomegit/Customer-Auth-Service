from rest_framework import serializers
from .models import Notes

class NoteSerializers(serializers.ModelSerializer):
    class Meta:
        model=Notes
        fields = ['id','description','title']
