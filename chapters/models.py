from django.db import models

# Create your models here.

class Chapter(models.Model):
    name = models.CharField(max_length=50)
    data_name = models.CharField(max_length=50)
    module = models.ForeignKey('modules.Module', on_delete=models.CASCADE, related_name='chapters')

    def __str__(self):
        return f'{self.name}'