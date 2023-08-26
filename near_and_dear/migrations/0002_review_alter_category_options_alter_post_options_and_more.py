# Generated by Django 4.1.6 on 2023-04-09 10:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('near_and_dear', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=128)),
                ('content', models.TextField(blank=True)),
                ('image', models.ImageField(default='default.png', upload_to='post/')),
            ],
            options={
                'ordering': ['-id'],
            },
        ),
        migrations.AlterModelOptions(
            name='category',
            options={'ordering': ['id']},
        ),
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ['-id']},
        ),
        migrations.CreateModel(
            name='ReviewComment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('create_dt', models.DateTimeField(auto_now_add=True)),
                ('update_dt', models.DateTimeField(auto_now=True)),
                ('review', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='near_and_dear.review')),
            ],
            options={
                'ordering': ['-id'],
            },
        ),
    ]