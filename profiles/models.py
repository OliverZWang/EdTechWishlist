from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from PIL import Image
from ckeditor.fields import RichTextField

User = settings.AUTH_USER_MODEL

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')
    bio = RichTextField(blank=True, null=True)
    profession = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return f'{self.user.username} Profile'
    

        

def user_did_save(sender, instance, created, *args, **kwargs):
    if created:
        Profile.objects.get_or_create(user=instance)

post_save.connect(user_did_save, sender=User)

