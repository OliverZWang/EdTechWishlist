from django import forms
from django.forms import TextInput, Textarea
from django.conf import settings
from .models import Idea, Comment
from ckeditor.widgets import CKEditorWidget
from ckeditor.fields import RichTextField

MAX_LENGTH = settings.MAX_LENGTH

TITLE_PLACEHOLDER = '''The title of the idea. e.g. "Cut Up Sentence Simulator" '''
PROBLEM_PLACEHOLDER = '''The problem you are facing or need help solving.\ne.g. Teaching reading to non-readers (1s​t​ grade) in an online environment is incredibly difficult. One strategy that we use in a face to face classroom is called a “cut up sentence” in which the teacher writes a series of words on a piece of paper. The teacher then literally cuts this paper up into individual words and mixes them up for a student. The student can then say the words as they recognize them and put them in order to form a sentence. '''
CURRENT_SOLUTION_PLACEHOLDER = '''What solutions, if any, are you using to address the problem. How well does it work? In what ways is it not ideal?\ne.g. Zoom “remote control” to drag around images in PowerPoint (difficult for students to use, especially since most of them are using iPads). '''
IDEAL_SOLUTION = '''What would be an ideal solution for the problem?\ne.g. A tool where I could type a sentence using a font that is kid-friendly. I could then cut up the sentence myself by dragging between words. The words would fall to the bottom and could be dragged around by me or the student. '''

class IdeaForm(forms.ModelForm):

    class Meta:
        model = Idea
        fields = ['title', 'problem', 'current_solution', 'ideal_solution', 'demo_picture']


class CommentForm(forms.ModelForm):
    class Meta: 
        model = Comment
        fields = ['content']