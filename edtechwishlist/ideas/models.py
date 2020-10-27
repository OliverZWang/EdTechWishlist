from django.db import models

# Create your models here.
class Idea(models.Model):
    content = models.TextField(blank=True, null=True)
    image = models.FileField(upload_to='image/', blank=True, null=True)

    class Meta:
        ordering = ['-id']



    def serialize(self):
        return{
            "id": self.id,
            "content": self.content,
            "wanted": 1

        }