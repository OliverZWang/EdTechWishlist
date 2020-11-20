from django.contrib import admin
from .models import Idea

# Register your models here.


class IdeaAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'user']
    search_fields = ['content','user__name', 'user__email']
    class Meta:
        model = Idea


admin.site.register(Idea, IdeaAdmin)