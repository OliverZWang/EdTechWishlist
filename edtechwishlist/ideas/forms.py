from django import forms

from .models import Idea

MAX_LENGTH = 1500
class IdeaForm(forms.ModelForm):
    class Meta:
        model = Idea
        fields = ['content']
    
    def clean_content(self):
        content = self.cleaned_data.get("content")
        if len(content) > MAX_LENGTH:
            raise forms.ValidationError("The content is too long")
        return content