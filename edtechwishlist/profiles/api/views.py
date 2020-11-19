import random
from django.http import HttpResponse, Http404, JsonResponse
from django.conf import settings
from django.shortcuts import render, redirect
from django.utils.http import is_safe_url
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from ..models import Profile
from django.contrib.auth import get_user_model

# Create your views here.

ALLOWED_HOSTS = settings.ALLOWED_HOSTS
User = get_user_model()

