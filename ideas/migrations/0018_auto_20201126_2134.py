# Generated by Django 3.1.2 on 2020-11-26 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ideas', '0017_auto_20201126_2127'),
    ]

    operations = [
        migrations.AlterField(
            model_name='idea',
            name='demo_picture',
            field=models.ImageField(default='default_article.jpg', upload_to='article_img'),
        ),
    ]
