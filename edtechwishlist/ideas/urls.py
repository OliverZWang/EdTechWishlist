from django.urls import path
from .views import home_view, idea_detail_view, idea_list_view, idea_create_view


app_name = "ideas"
urlpatterns = [
    path('', home_view, name="home-view"),
    path('create/', idea_create_view, name="idea-create"),
    path('<int:idea_id>/', idea_detail_view, name="idea-detail"),
    path('list/', idea_list_view, name="idea-list")
]

