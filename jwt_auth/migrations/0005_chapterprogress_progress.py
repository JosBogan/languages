# Generated by Django 2.2.9 on 2020-05-08 12:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0004_auto_20200507_1244'),
    ]

    operations = [
        migrations.AddField(
            model_name='chapterprogress',
            name='progress',
            field=models.IntegerField(default=0),
        ),
    ]