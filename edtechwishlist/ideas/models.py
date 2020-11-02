from django.db import models
from django.conf import settings 

User = settings.AUTH_USER_MODEL

# Create your models here.
class IdeaLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    idea = models.ForeignKey("Idea", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)

class Idea(models.Model):
    user = models.ForeignKey(User,  on_delete=models.CASCADE)
    wanted = models.ManyToManyField(User, related_name='tweet_user', blank=True, through=IdeaLike)
    content = models.TextField(blank=True, null=True)
    image = models.FileField(upload_to='image/', blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    # def __str__(self):
    #     return self.content

    class Meta:
        ordering = ['-id']



    def serialize(self):
        return{
            "id": self.id,
            "content": self.content,
            "wanted": 1

        }