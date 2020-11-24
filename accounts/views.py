from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib import messages
from .forms import UserRegisterForm


# Create your views here.
def login_view(request, *args, **kwargs):
    form = AuthenticationForm(request, data=request.POST or None)

    if form.is_valid():
        user_ = form.get_user()
        login(request, user_)
        return redirect('/')

    return render(request, "accounts/login.html", {"form": form})

def logout_view(request, *args, **kwargs):
    if request.method == "POST":
        logout(request)
        return redirect('/login')

    return render(request, "accounts/logout.html")


def register_view(request, *args, **kwargs):
    form = UserRegisterForm(request.POST or None)
    
    if form.is_valid():

        user = form.save(commit=True)
        user.set_password(form.cleaned_data.get("password1"))

        # send confirmation email to verify their account
        # login(request, user)
        username = form.cleaned_data.get('username')
        messages.success(request, f'Account Created for {username}!')
        return redirect('/login/')

    return render(request, "accounts/register.html", {"form": form})