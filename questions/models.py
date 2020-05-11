from django.db import models

# Create your models here.

class Question(models.Model):

    QUESTION_TYPE_CHOICES = [
        ('direct', 'Direct'),
        ('table_fill', 'Table Fill'),
        ('multiple_choice', 'Multiple Choice')
    ]
    INSTRUCTION_OPTIONS = [
        ('translate', 'Translate the following'),
        ('conjugate', 'Conjugate the followiing'),
        ('fill', 'Fill in the blanks')
    ]

    instruction_type = models.CharField(max_length=50, choices=INSTRUCTION_OPTIONS, blank=True)
    specificInstruction = models.CharField(max_length=200, blank=True)
    question = models.CharField(max_length=200)
    question_type = models.CharField(max_length=50, choices=QUESTION_TYPE_CHOICES)
    answer = models.CharField(max_length=200)
    chunk = models.ForeignKey('chunks.Chunk', on_delete=models.CASCADE, related_name='questions')

    def __str__(self):
        return f'{self.question_type} - {self.chunk}'
