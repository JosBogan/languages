# Generated by Django 2.2.9 on 2020-06-25 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chapters', '0004_chapter_external_link'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chapter',
            name='order',
            field=models.IntegerField(),
        ),
    ]