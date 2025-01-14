from rest_framework import serializers
from django.contrib.auth.models import User


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model=User
        fields = ['username','email','password','first_name']

    def create(self, validated_data):
        user = User (
            username = validated_data['username'],
            email = validated_data['email'],
            first_name = validated_data['first_name']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    
    def validate_email(self, value):
        if User.objects.filter(email=value).exists():
            raise serializers.ValidationError("Email already exists.")
        return value
