from django.urls import path
from .views import application_about_view, application_home_view


app_name = "application"
urlpatterns = [
    path('', application_home_view, name="application-home"),
    path('about/', application_about_view, name="application-about"),
    
]

