# Generated by Django 4.1.6 on 2023-05-31 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('near_and_dear', '0004_remove_reviewcomment_review_delete_review_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
