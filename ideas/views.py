from django.http import HttpResponse, Http404, JsonResponse
from django.conf import settings
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.auth.models import User
from django.shortcuts import render, redirect, get_object_or_404
from django.utils.http import is_safe_url
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Idea
from .forms import IdeaForm
from .serializers import IdeaSerializer
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
# Create your views here.

ALLOWED_HOSTS = settings.ALLOWED_HOSTS

class IdeaListView(ListView):
    model = Idea
    # template_name = 'application/home.html'
    context_object_name = 'ideas'
    ordering = ['-timestamp']
    paginate_by = 6

class ProfileIdeaListView(ListView):
    model = Idea
    template_name = 'profiles/profile_idea_list.html'
    context_object_name = 'ideas'
    
    paginate_by = 6

    def get_queryset(self):
        user = get_object_or_404(User, username=self.kwargs.get('username'))
        return Idea.objects.filter(user=user).order_by('-timestamp')
    

class IdeaDetailView(DetailView):
    model = Idea
    # template_name = 'ideas/detail.html'
    fields = ['title', 'problem', 'current_solution', 'ideal_solution', 'image']

class IdeaCreateView(LoginRequiredMixin, CreateView):
    model = Idea
    fields = ['title', 'problem', 'current_solution', 'ideal_solution', 'image']

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)

class IdeaUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Idea
    fields = ['title', 'problem', 'current_solution', 'ideal_solution', 'image']

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)

    def test_func(self):
        idea = self.get_object()
        if self.request.user == idea.user:
            return True
        else:
            return False

class IdeaDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Idea
    success_url = "/"
    def test_func(self):
        idea = self.get_object()
        if self.request.user == idea.user:
            return True
        else:
            return False

def get_latest_idea(request):
    latest_idea = Idea.objects.order_by('-timestamp').first()
    return render(request, "ideas/idea_detail.html", {"object": latest_idea})

def home_view(request, *args, **kwargs):
    username = None
    
    if request.user.is_authenticated:
        username = request.user.username

    return render(request, "ideas/home.html", context={"username": username}, status=200)

def ideas_list_view(request, *args, **kwargs):

    return render(request, "ideas/list.html")

def ideas_detail_view(request, idea_id, *args, **kwargs):

    return render(request, "ideas/detail.html", context={"idea_id": idea_id})
