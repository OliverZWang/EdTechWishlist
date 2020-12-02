"""edtechwishlist URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.urls import path, re_path, include
from django.views.generic import TemplateView



from ideas.views import (
    get_latest_idea,
    IdeaListView,
    IdeaDetailView,
    IdeaCreateView,
    IdeaUpdateView,
    IdeaDeleteView,
    ProfileIdeaListView,
    CommentCreateView, 
    CommentUpdateView,
    CommentDeleteView

)
from application.views import (
    application_about_view, 
    application_home_view,
    application_example_view
    
)

from profiles.views import (
    current_profile_view,
    login_view,
    logout_view,
    register_view
)



urlpatterns = [
    path('admin/', admin.site.urls),


    path('about/', application_about_view, name='about'),
    path('example/', application_example_view, name='example'),
    path('login/', login_view, name="login"),
    path('logout/', logout_view, name="logout"),
    path('register/', register_view, name="register"),

    path('password-reset/', auth_views.PasswordResetView.as_view(
             template_name='accounts/password_reset.html'
         ),
         name='password_reset'),
    path('password-reset/done/',
         auth_views.PasswordResetDoneView.as_view(
             template_name='accounts/password_reset_done.html'
         ),
         name='password_reset_done'),
    path('password-reset-confirm/<uidb64>/<token>/',
         auth_views.PasswordResetConfirmView.as_view(
             template_name='accounts/password_reset_confirm.html'
         ),
         name='password_reset_confirm'),
    path('password-reset-complete/',
         auth_views.PasswordResetCompleteView.as_view(
             template_name='accounts/password_reset_complete.html'
         ),
         name='password_reset_complete'),

    path('profile/', current_profile_view, name="profile-current"),
    path('profile/<str:username>', ProfileIdeaListView.as_view(), name='profile-idea-list'),

    path('idea/<int:pk>/', IdeaDetailView.as_view(), name="idea-detail"),
    path('idea/create/', IdeaCreateView.as_view(), name="idea-create"),
    path('', IdeaListView.as_view(), name='home'),
    path('idea/<int:pk>/update/', IdeaUpdateView.as_view(), name="idea-update"),
    path('idea/<int:pk>/delete/', IdeaDeleteView.as_view(), name="idea-delete"),
    path('idea/latest/', get_latest_idea, name='idea-latest'),

    path('comment/create/<int:pk>/', CommentCreateView.as_view(), name="comment-create"),
    path('comment/update/<int:pk>/', CommentUpdateView.as_view(), name="comment-update"),
    path('comment/delete/<int:pk>/', CommentDeleteView.as_view(), name="comment-delete"),

    path('ideas/', include('ideas.api.urls')),
    # path('media/profile_pics/profile_image.png'),

    
    # re_path(r'profiles?/', include('profiles.urls')),
    re_path(r'profiles?/api/', include('profiles.api.urls')),
    # path('react/', TemplateView.as_view(template_name='react_via_dj.html'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



if settings.DEBUG: 
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

    