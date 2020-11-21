from django.db import models
from django.conf import settings 

User = settings.AUTH_USER_MODEL

# Create your models here.
class Idea(models.Model):
    user = models.ForeignKey(User,  on_delete=models.CASCADE, related_name='ideas')
    title = models.CharField(max_length=150)
    content = models.TextField(blank=True, null=True)
    image = models.FileField(upload_to='image/', blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    # def __str__(self):
    #     return self.content

    class Meta:
        ordering = ['-id']



    # def serialize(self):
    #     return{
    #         "id": self.id,
    #         "content": self.content,
    #         "user": self.user.username,
    #         # "wanted": 1

    #     }