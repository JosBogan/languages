from django.db import models

# Create your models here.

class Page(models.Model):
    data_name = models.CharField(max_length=50)
    title = models.CharField(max_length=50, blank=True)
    content = models.CharField(max_length=500)
    chunk = models.ForeignKey('chunks.Chunk', on_delete=models.CASCADE, related_name='pages')
    page_no = models.IntegerField()

    def __str__(self):
        return f'{self.data_name}'