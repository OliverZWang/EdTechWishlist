from django import forms
from django.conf import settings
from .models import Idea

MAX_LENGTH = settings.MAX_LENGTH

class IdeaForm(forms.ModelForm):
    class Meta:
        model = Idea
        fields = ['title', 'problem', 'current_solution', 'ideal_solution', 'image']
    
    # def clean_content(self):
    #     content = self.cleaned_data.get("content")
    #     if len(content) > MAX_LENGTH:
    #         raise forms.ValidationError("The content is too long")
    #     return content