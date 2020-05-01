from django.db import models

# Create your models here.

class Module(models.Model):
    name = models.CharField(max_length=50)
    data_name = models.CharField(unique=True, max_length=50)
    getting_started = models.CharField(max_length=1000, blank=True)
    subject = models.ForeignKey('subjects.Subject', on_delete=models.CASCADE, related_name='modules')

    def __str__(self):
        return f'{self.name}'