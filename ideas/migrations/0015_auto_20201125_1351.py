# Generated by Django 3.1.2 on 2020-11-25 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ideas', '0014_auto_20201125_1342'),
    ]

    operations = [
        migrations.AlterField(
            model_name='idea',
            name='image',
            field=models.ImageField(upload_to='article_img'),
        ),
    ]
