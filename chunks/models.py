from django.db import models

# Create your models here.

class Chunk(models.Model):
    TYPE_CHOICES = [
        ('lesson', 'Lesson'),
        ('test', 'Test'),
        ('vocab', 'Vocab'),
    ]
    name = models.CharField(max_length=50)
    data_name = models.CharField(max_length=50)
    order = models.IntegerField()
    data_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    external_link = models.CharField(max_length=100, blank=True)
    chapter = models.ForeignKey('chapters.Chapter', on_delete=models.CASCADE, related_name='chunks')

    def __str__(self):
        return f'{self.name} - {self.chapter} - {self.order}'