import random
from django.http import HttpResponse, Http404, JsonResponse
from django.conf import settings
from django.shortcuts import render, redirect
from django.utils.http import is_safe_url

from .models import Idea
from .forms import IdeaForm
# Create your views here.

ALLOWED_HOSTS = settings.ALLOWED_HOSTS

def idea_list_view(request, *args, **kwargs):

    # REST API VIEW
    # return JSON data
    qs = Idea.objects.all()
    idea_list = [{"id": x.id, "content": x.content, "numWanted": random.randint(0, 50)} for x in qs]
    
    data = {
        "response": idea_list
    }
    return JsonResponse(data)

def idea_create_view(request, *args, **kwargs):
    print("ajax", request.is_ajax())
    form = IdeaForm(request.POST or None)
    # print('post data is ', request.POST)
    next_url = request.POST.get("next") or None
    # print("next url", next_url)
    if form.is_valid():
        obj = form.save(commit=False)
        obj.save()

        if request.is_ajax():
            return JsonResponse({}, status=201) # 201 is usually for created items

        if next_url != None:
            # is_safe_url(next_url, ALLOWED_HOSTS)
            return redirect(next_url)
        
        form = IdeaForm()
    return render(request, 'ideas/form.html', context={"form": form})

def home_view(request, *args, **kwargs):
    # return HttpResponse("<h1>Hello World</h1>")
    return render(request, "ideas/home.html", context={}, status=200)

def idea_detail_view(request, idea_id, *args, **kwargs):
    
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