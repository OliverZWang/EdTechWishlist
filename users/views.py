from django.shortcuts import render, get_object_or_404
from django.views.generic import DetailView, CreateView, ListView, UpdateView, DeleteView
from django.urls import reverse

from .models import User
from .forms import UserModelForm


# Create your views here.
class UserDetailView(DetailView):
    template_name = "users/user_detail.html"

    def get_object(self):
        id_  = self.kwargs.get("id")
        return get_object_or_404(User, id=id_)

class UserCreateView(CreateView):
    template_name = 'users/user_create.html'
    form_class = UserModelForm
    queryset = User.objects.all()

    def form_valid(self, form):
        print(form.cleaned_data)
        return super().form_valid(form)

class UserListView(ListView):
    template_name = 'users/user_list.html'
    queryset = User.objects.all()

class UserUpdateView(UpdateView):
    template_name = 'users/user_create.html'
    form_class = UserModelForm

    def get_object(self):
        id_ = self.kwargs.get("id")
        return get_object_or_404(User, id=id_)
    
    def form_valid(self, form):
        print(form.cleaned_data)
        return super().form_valid(form)


class UserDeleteView(DeleteView):
    template_name = 'users/user_delete.html'

    def get_object(self):
        id_ = self.kwargs.get('id')
        return get_object_or_404(User, id=id_)
    
    def get_success_url(self):
        return reverse('users:user-list')