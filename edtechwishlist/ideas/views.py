import random
from django.http import HttpResponse, Http404, JsonResponse
from django.conf import settings
from django.shortcuts import render, redirect
from django.utils.http import is_safe_url

from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Idea
from .forms import IdeaForm
from .serializers import IdeaSerializer, IdeaActionSerializer
# Create your views here.

ALLOWED_HOSTS = settings.ALLOWED_HOSTS

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
def idea_action_view(request, *args, **kwargs):
    # actions are want, unwant
    print(request.POST, request.data)
    serializer = IdeaActionSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        data = serializer.validated_data
        idea_id = data.get("id")
        action = data.get("action")

        qs = Idea.objects.filter(id=idea_id)
        if not qs.exists():
            return Response({}, status=404)
        obj = qs.first()
        if action == "want":
            obj.wanted.add(request.user)
            serializer = IdeaSerializer(obj)
            return Response(serializer.data, status=200)
        elif action == "unwant":
            obj.wanted.remove(request.user)

            

    
    return Response({}, status=200)

@api_view(['DELETE', 'POST'])
@permission_classes([IsAuthenticated])
def idea_delete_view(request, idea_id, *args, **kwargs):
    qs = Idea.objects.filter(id=idea_id)
    if not qs.exists():
        return Response({}, status=404)

    # check if it's the same user deleting
    qs = qs.filter(user=request.user)
    if not qs.exists():
        return Response({"message": "You cannot delete this tweet"}, status=401)
    obj = qs.first()
    obj.delete()
    return Response({"memmsage": "The idea has been removed. "}, status=200)

@api_view(['GET'])
def idea_list_view(request, *args, **kwargs):
    qs = Idea.objects.all()
    serializer = IdeaSerializer(qs, many=True)
    return Response(serializer.data, status=200)

# def idea_list_view_pure_django(request, *args, **kwargs):

#     # REST API VIEW
#     # return JSON data
#     qs = Idea.objects.all()
#     idea_list = [x.serialize() for x in qs]
    
#     data = {
#         "response": idea_list
#     }
#     return JsonResponse(data)

# http method the client == post
# No longer rendering a form. Just accepting post data
@api_view(['POST'])
# @authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def idea_create_view(request, *args, **kwargs):
    print("request:", request)
    serializer = IdeaSerializer(data=request.POST or None)
    if serializer.is_valid(raise_exception=True):
        serializer.save(user=request.user)
        return Response(serializer.data, status=201)
        # serializer.save()
    return Response({}, status=400)

# PURE DJANGO IDEA CREATE VIEW
# def idea_create_view(request, *args, **kwargs):
#     '''
#     REST API create view
#     '''
#     user = request.user
#     if not request.user.is_authenticated:
#         user = None
#         if request.is_ajax():
#             return JsonResponse({}, status=401)
#         return redirect(settings.LOGIN_URL)

#     print("ajax", request.is_ajax())
#     form = IdeaForm(request.POST or None)
#     # print('post data is ', request.POST)
#     next_url = request.POST.get("next") or None
#     # print("next url", next_url)
#     if form.is_valid():
        
#         obj = form.save(commit=False)
#         obj.user = user
#         obj.save()

#         if request.is_ajax():
#             print("serialized response: ", JsonResponse(obj.serialize(), status=201))
#             return JsonResponse(obj.serialize(), status=201) # 201 is usually for created items

#         if next_url != None:
#             # is_safe_url(next_url, ALLOWED_HOSTS)
#             return redirect(next_url)
        
#         form = IdeaForm()
#     if form.errors:
#         if request.is_ajax():
#             return JsonResponse(form.errors, status=400)
#     return render(request, 'ideas/form.html', context={"form": form})

def home_view(request, *args, **kwargs):
    # return HttpResponse("<h1>Hello World</h1>")
    return render(request, "ideas/home.html", context={}, status=200)

def idea_detail_view_pure_django(request, idea_id, *args, **kwargs):
    
    # rest API view
    # return JSON data


    data = {
        "id": idea_id,
        # "image_path": obj.image.url
    }
    status = 200
    try:
        obj = Idea.objects.get(id=idea_id)
        data["content"] = obj.content
    except:
        data["messgae"] = "Not Found"
        status = 404

    return JsonResponse(data, status=status)