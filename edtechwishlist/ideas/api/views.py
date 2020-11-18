import random
from django.http import HttpResponse, Http404, JsonResponse
from django.conf import settings
from django.shortcuts import render, redirect
from django.utils.http import is_safe_url
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from ..models import Idea
from ..forms import IdeaForm
from ..serializers import IdeaSerializer
# Create your views here.

ALLOWED_HOSTS = settings.ALLOWED_HOSTS




@api_view(['GET'])
def idea_list_view(request, *args, **kwargs):
    qs = Idea.objects.all()
    username = request.GET.get('username')
    if username != None:
        qs = qs.filter(user__username__iexact=username)
    serializer = IdeaSerializer(qs, many=True)
    return Response(serializer.data, status=200)



# http method the client == post
# No longer rendering a form. Just accepting post data
@api_view(['POST'])
# @authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def idea_create_view(request, *args, **kwargs):
    # data = request.POST or None
    # print("Request post:", request.data)
    serializer = IdeaSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.data, status = 201)
    #     # serializer.save()
    return Response({}, status=400)

@api_view(['GET'])
def idea_detail_view(request, idea_id, *args, **kwargs):
    qs = Idea.objects.filter(id=idea_id)
    if not qs.exists():
        return Response({}, status=404)
    obj = qs.first()
    serializer = IdeaSerializer(obj)
    return Response(serializer.data, status=200)

@api_view(['DELETE', 'POST'])
@permission_classes([IsAuthenticated])
def idea_delete_view(request, idea_id, *args, **kwargs):
    qs = Idea.objects.filter(id=idea_id)
    if not qs.exists():
        return Response({}, status=404)
    qs = qs.filter(user=request.user)
    if not qs.exists():
        return Response({"message": "You cannot delete this idea."}, status=401)
    obj = qs.first()
    obj.delete()

    return Response({"message": "Idea removed"}, status=200)

