from django.db import models
from django.urls import reverse

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=120)
    bio = models.TextField(blank=True, null=True)
    email = models.EmailField()

    def get_absolute_url(self):
        return reverse("users:user-detail", kwargs={"id": self.id})
    