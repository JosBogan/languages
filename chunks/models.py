from django.db import models

# Create your models here.

class Chunk(models.Model):
    name = models.CharField(max_length=50)
    data_name = models.CharField(max_length=50)
    external_link = models.CharField(max_length=100, blank=True)
    chapter = models.ForeignKey('chapters.Chapter', on_delete=models.CASCADE, related_name='chunks')

    def __str__(self):
        return f'{self.name}'