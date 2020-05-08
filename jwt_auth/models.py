from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class User(AbstractUser):

    email = models.EmailField(unique=True)
    # current_modules = models.ManyToManyField('modules.Module', blank=True, related_name='users_current')
    # current_chapters = models.ManyToManyField('chapters.Chapter', blank=True, related_name='users_current')
    # current_chunks = models.ManyToManyField('chunks.Chunk', blank=True, related_name='users_current')
    # completed_modules = models.ManyToManyField('modules.Module', blank=True, related_name='users_completed')
    # completed_chapters = models.ManyToManyField('chapters.Chapter', blank=True, related_name='users_completed')
    # completed_chunks = models.ManyToManyField('chunks.Chunk', blank=True, related_name='users_completed')

class UserProgress(models.Model):
    
    user_id = models.OneToOneField(User, related_name='progression', on_delete=models.CASCADE)

class ModuleProgress(models.Model):

    progress = models.IntegerField(default=0)
    completed = models.BooleanField(default=False)
    user_progress_id = models.ForeignKey(UserProgress, related_name='module_progress', on_delete=models.CASCADE)
    module_id = models.ForeignKey('modules.Module', related_name='users', on_delete=models.CASCADE)

class ChapterProgress(models.Model):

    progress = models.IntegerField(default=0)
    completed = models.BooleanField(default=False)
    user_module_progress_id = models.ForeignKey(ModuleProgress, related_name='chapter_progress', on_delete=models.CASCADE)
    chapter_id = models.ForeignKey('chapters.Chapter', related_name='users', on_delete=models.CASCADE)

class ChunkProgress(models.Model):

    completed = models.BooleanField(default=False)
    user_chapter_progress_id = models.ForeignKey(ChapterProgress, related_name='chunk_progress', on_delete=models.CASCADE)
    chunk_id = models.ForeignKey('chunks.Chunk', related_name='users', on_delete=models.CASCADE)