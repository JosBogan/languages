from django.db import models

# Create your models here.

class Subject(models.Model):
    name = models.CharField(max_length=50)
    data_name = models.CharField(unique=True, max_length=50)

    def __str__(self):
        return f'{self.name}'