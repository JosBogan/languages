from django.db import models

# Create your models here.

class Vocab(models.Model):

    native = models.CharField(max_length=50)
    translation = models.CharField(max_length=50)
    otherTranslation = models.CharField(max_length=50, blank=True)
    chunk = models.ForeignKey('chunks.Chunk', on_delete=models.CASCADE, related_name='vocab')
    vocab_type = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.native} - {self.translation} - {self.otherTranslation} - {self.chunk}'