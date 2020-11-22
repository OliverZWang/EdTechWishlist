from django.shortcuts import render


# Create your views here.
def application_about_view(request):
    return render(request, 'application/about.html')

def application_home_view(request):
    return render(request, 'application/home.html')