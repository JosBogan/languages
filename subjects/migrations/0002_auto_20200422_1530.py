# Generated by Django 2.2.9 on 2020-04-22 15:30

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('subjects', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='subject',
            name='data_name',
            field=models.CharField(default=django.utils.timezone.now, max_length=50, unique=True),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='subject',
            name='name',
            field=models.CharField(max_length=50),
        ),
    ]
