# Generated by Django 3.1.2 on 2020-11-25 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ideas', '0009_auto_20201125_1228'),
    ]

    operations = [
        migrations.AlterField(
            model_name='idea',
            name='image',
            field=models.FileField(blank=True, default='default_article.jpg', null=True, upload_to='article_img'),
        ),
    ]
