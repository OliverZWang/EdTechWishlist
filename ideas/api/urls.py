from django.urls import path
from .views import idea_detail_view, idea_list_view, idea_create_view, idea_delete_view


app_name = "ideas"
urlpatterns = [
    path('create/', idea_create_view, name="idea-create"),
    path('<int:idea_id>/', idea_detail_view, name="idea-detail"),
    path('<int:idea_id>/delete/', idea_delete_view, name="idea-delete"),
    path('list/', idea_list_view, name="idea-list")
]

