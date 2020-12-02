
from django.conf import settings
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin
from django.contrib.auth.models import User
from django.shortcuts import render, get_object_or_404
from django.urls import reverse_lazy
from .models import Idea, Comment
from profiles.models import Profile
from .forms import IdeaForm, CommentForm
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView


ALLOWED_HOSTS = settings.ALLOWED_HOSTS

class IdeaListView(ListView):
    model = Idea
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
    
    def get_context_data(self, **kwargs):
        user = get_object_or_404(User, username=self.kwargs.get('username'))
        profile = get_object_or_404(Profile, user=user)
        context = super().get_context_data(**kwargs)
        context['profile'] = profile
        return context

class IdeaDetailView(DetailView):
    model = Idea
    fields = ['title', 'problem', 'current_solution', 'ideal_solution', 'demo_picture']

class IdeaCreateView(LoginRequiredMixin, CreateView):
    model = Idea
    form_class = IdeaForm
    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)

class IdeaUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Idea
    fields = ['title', 'problem', 'current_solution', 'ideal_solution', 'demo_picture']

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
    def test_func(self):
        idea = self.get_object()
        if self.request.user == idea.user:
            return True
        else:
            return False
    def get_success_url(self):

        return reverse_lazy('profile-idea-list', kwargs={'username': self.request.user.username})

class CommentCreateView(LoginRequiredMixin, CreateView):
    model = Comment
    form_class = CommentForm

    def form_valid(self, form):
        form.instance.user = self.request.user
        form.instance.idea = Idea.objects.filter(id = self.kwargs['pk']).first()
        return super().form_valid(form)
    
    def get_success_url(self):
        # user = get_object_or_404(User, username=self.kwargs.get('username'))
        return reverse_lazy('idea-detail', kwargs={'pk': self.kwargs['pk']})

class CommentUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    model = Comment

    form_class = CommentForm

    def form_valid(self, form):
        form.instance.user = self.request.user
        form.instance.idea = self.get_object().idea
        return super().form_valid(form)

    def test_func(self):
        comment = self.get_object()
        if self.request.user == comment.user:
            return True
        else:
            return False

    def get_success_url(self):
        return reverse_lazy('idea-detail', kwargs={'pk': self.get_object().idea.id})

class CommentDeleteView(LoginRequiredMixin, UserPassesTestMixin, DeleteView):
    model = Comment

    def test_func(self):
        comment = self.get_object()
        if self.request.user == comment.user:
            return True
        else:
            return False

    def get_success_url(self):
        return reverse_lazy('idea-detail', kwargs={'pk': self.get_object().idea.id})


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
