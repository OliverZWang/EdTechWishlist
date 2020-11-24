from django import forms
from .models import Profile
from django.contrib.auth import get_user_model

from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm



User = get_user_model()

class UserProfileForm(forms.ModelForm):
    
    location = forms.CharField(required=False)
    bio = forms.CharField(required=False)

    class Meta: 
        model = User
        fields = ['first_name','last_name', 'email']

class ProfileBasicForm(forms.Form):
    
    first_name = forms.CharField(required=False)
    last_name = forms.CharField(required=False)
    email = forms.CharField(required=False)
    location = forms.CharField(required=False)
    bio = forms.CharField(required=False)


class ProfileForm(forms.ModelForm):

    # first_name = forms.CharField(required=False)
    # last_name = forms.CharField(required=False)
    # email = forms.CharField(required=False)

    class Meta: 
        model = Profile
        fields = ['image', 'profession', 'bio']


class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()
    first_name = forms.CharField(max_length=50)
    last_name = forms.CharField(max_length=50)

    class Meta:
        model = User
        fields = ['username', 'email', 'first_name', 'last_name', 'password1', 'password2']

class UserUpdateForm(forms.ModelForm):
    email = forms.ImageField()
    first_name = forms.CharField(max_length=50)
    last_name = forms.CharField(max_length=50)

    class Meta: 
        model = User
        fields = ['username', 'email', 'first_name', 'last_name']

