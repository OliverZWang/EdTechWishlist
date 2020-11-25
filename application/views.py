from django.shortcuts import render
from django.apps import apps
IdeaModel = apps.get_model('ideas', 'Idea')


# Create your views here.
def application_about_view(request):
    return render(request, 'application/about.html')

def application_home_view(request):
    context = {
        'ideas': IdeaModel.objects.all()
    }
    return render(request, 'application/home.html', context)

