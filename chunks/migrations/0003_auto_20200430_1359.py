# Generated by Django 2.2.9 on 2020-04-30 13:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chunks', '0002_chunk_data_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chunk',
            name='data_type',
            field=models.CharField(choices=[('lesson', 'Lesson'), ('test', 'Test'), ('vocab', 'Vocab')], max_length=20),
        ),
    ]
