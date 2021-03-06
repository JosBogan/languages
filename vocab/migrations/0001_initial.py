# Generated by Django 2.2.9 on 2020-04-30 09:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('chapters', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vocab',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('native', models.CharField(max_length=50)),
                ('translation', models.CharField(max_length=50)),
                ('otherTranslation', models.CharField(blank=True, max_length=50)),
                ('chapter', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vocab', to='chapters.Chapter')),
            ],
        ),
    ]
