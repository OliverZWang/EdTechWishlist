from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.http import Http404
from .models import Profile
from .forms import ProfileUpdateForm, UserRegisterForm, UserUpdateForm
from django.conf import settings

from django.contrib.auth import login, logout
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages

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
    context = {
        "form": None, 
        "description": "Are you sure you want to logout?",
        "btn_label": "Click to Confirm", 
        "title": "logout"
    }
    return render(request, "accounts/logout.html", context)


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



def profile_update_view(request, *args, **kwargs):
    if not request.user.is_authenticated:
        return redirect('/login?next=/profile/update')

    user = request.user
    user_data = {
        "first_name": user.first_name,
        "last_name": user.last_name,
        "email": user.email
    }
    my_profile = request.user.profile

    form = ProfileForm(request.POST or None, instance=my_profile, initial=user_data)
    
    if form.is_valid():
        profile_obj = form.save(commit=False)
        first_name = form.cleaned_data.get('first_name')
        last_name = form.cleaned_data.get('last_name')
        email = form.cleaned_data.get('email')

        user.first_name = first_name
        user.last_name = last_name
        user.email = email

        user.save()
        profile_obj.save()

    context = {
        "form": form, 
        "btn_label": "Save",
        "title": "Update Profile"
    }
    return render(request, 'profiles/form.html', context)


def profile_detail_view(request, username, *args, **kwargs):

    # get the profile for the passed username
    qs = Profile.objects.filter(user__username=username)
    if not qs.exists():
        raise Http404
    profile_object = qs.first()
    context = {
        "username": username,
        "profile": profile_object
    }
    return render(request, "profiles/detail.html", context)

@login_required
def current_profile_view(request):

    if request.method == 'POST':
        u_form = UserUpdateForm(request.POST, instance=request.user)
        p_form = ProfileUpdateForm(request.POST, request.FILES, instance=request.user.profile)

        if u_form.is_valid() and p_form.is_valid():
            u_form.save()
            p_form.save()
            messages.success(request, 'Your Profile Has been Updated')
            return redirect('/profile/')
    else:
        u_form = UserUpdateForm(instance=request.user)
        p_form = ProfileUpdateForm(instance=request.user.profile)

    context = {
        'u_form': u_form,
        'p_form': p_form
    }
    return render(request, "profiles/profile.html", context)
