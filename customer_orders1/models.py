from django.db import models
from django.contrib.auth.models import User
class Notes(models.Model):
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    owner = models.foreignKey(User, on_delete = models.Cascade,related_name = 'note')
