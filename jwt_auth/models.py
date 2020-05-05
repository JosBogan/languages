from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):

    email = models.EmailField(unique=True)
    current_modules = models.ManyToManyField('modules.Module', blank=True, related_name='users_current')
    current_chapters = models.ManyToManyField('chapters.Chapter', blank=True, related_name='users_current')
    current_chunks = models.ManyToManyField('chunks.Chunk', blank=True, related_name='users_current')
    completed_modules = models.ManyToManyField('modules.Module', blank=True, related_name='users_completed')
    completed_chapters = models.ManyToManyField('chapters.Chapter', blank=True, related_name='users_completed')
    completed_chunks = models.ManyToManyField('chunks.Chunk', blank=True, related_name='users_completed')

