# Generated by Django 2.2.9 on 2020-05-08 15:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('modules', '0002_module_getting_started'),
    ]

    operations = [
        migrations.AddField(
            model_name='module',
            name='description',
            field=models.CharField(blank=True, max_length=2000),
        ),
    ]
