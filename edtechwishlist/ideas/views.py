import random
from django.http import HttpResponse, Http404, JsonResponse
from django.conf import settings
from django.shortcuts import render, redirect
from django.utils.http import is_safe_url
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Idea
from .forms import IdeaForm
from .serializers import IdeaSerializer
# Create your views here.

ALLOWED_HOSTS = settings.ALLOWED_HOSTS

def home_view(request, *args, **kwargs):
    username = None
    
    if request.user.is_authenticated:
        username = request.user.username

    return render(request, "ideas/home.html", context={"username": username}, status=200)

def ideas_list_view(request, *args, **kwargs):
    print("user is:", request.user)
    return render(request, "ideas/list.html")

def ideas_detail_view(request, idea_id, *args, **kwargs):

    return render(request, "ideas/detail.html", context={"idea_id": idea_id})
