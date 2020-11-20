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
from ..serializers import ProfileSerializer
from django.contrib.auth import get_user_model


# Create your views here.

ALLOWED_HOSTS = settings.ALLOWED_HOSTS
User = get_user_model()

@api_view(['GET'])
def profile_detail_api_view(request, username, *args, **kwargs):
    qs = Profile.objects.filter(user__username=username)
    if not qs.exists():
        return Response({"detail": "User not found"}, status=200)
    profile_obj = qs.first()
    data = ProfileSerializer(instance=profile_obj)

    return Response(data.data, status=200)