# Generated by Django 2.2.9 on 2020-05-01 13:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chunks', '0003_auto_20200430_1359'),
    ]

    operations = [
        migrations.AddField(
            model_name='chunk',
            name='order',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
