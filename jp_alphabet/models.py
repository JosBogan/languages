from django.db import models

# Create your models here.

class Character(models.Model):
    character = models.CharField(max_length=1, unique=True)
    translation = models.CharField(max_length=5)
    row = models.IntegerField()

    def __str__(self):
        return f'{self.character} - {self.translation}'