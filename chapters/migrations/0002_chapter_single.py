# Generated by Django 2.2.9 on 2020-05-01 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chapters', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='chapter',
            name='single',
            field=models.BooleanField(blank=True, default=False),
            preserve_default=False,
        ),
    ]
