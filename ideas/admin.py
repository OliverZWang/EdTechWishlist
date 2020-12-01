from django.contrib import admin
from .models import Idea, Comment

# Register your models here.


class IdeaAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'user']
    search_fields = ['content','user__name', 'user__email']
    class Meta:
        model = Idea


admin.site.register(Idea, IdeaAdmin)

class CommentAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'user']
    search_fields = ['content', 'user__name', 'user__email']
    class Meta:
        model = Comment

admin.site.register(Comment, CommentAdmin)