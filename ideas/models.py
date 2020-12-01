from django.db import models
from django.conf import settings 
from django.urls import reverse
from PIL import Image
User = settings.AUTH_USER_MODEL



# Create your models here.
class Idea(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='ideas')
    title = models.CharField(max_length=100)
    problem = models.TextField(blank=True, null=True)
    current_solution = models.TextField(blank=True, null=True)
    ideal_solution = models.TextField(blank=True, null=True)
    demo_picture = models.ImageField(default='default_article.jpg', upload_to='article_img')
    timestamp = models.DateTimeField(auto_now_add=True)


    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return self.title
    
    def get_absolute_url(self):
        return reverse("idea-detail", kwargs={"pk": self.pk})
    
    # def save(self):
    #     super().save(*args, **kwargs)
    #     if self.image:
    #         img = Image.open(self.image.path)
    #         if img.height > 600 or img.width > 800:
    #             output_size = (600, 800)
    #             img.thumbnail(output_size)
    #             img.save(self.image.path)

class Comment(models.Model):
    idea = models.ForeignKey(Idea, on_delete=models.CASCADE, related_name='comments')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='comments')
    content = models.TextField(blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-timestamp']
    
    def __str__(self):
        return self.content
