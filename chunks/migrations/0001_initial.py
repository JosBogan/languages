# Generated by Django 2.2.9 on 2020-04-24 10:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('chapters', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Chunk',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('data_name', models.CharField(max_length=50)),
                ('chapter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='chunks', to='chapters.Chapter')),
            ],
        ),
    ]
