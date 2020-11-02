from django.urls import path
from .views import home_view, idea_detail_view, idea_list_view, idea_create_view, idea_delete_view, idea_action_view


app_name = "ideas"
urlpatterns = [
    path('', home_view, name="home-view"),
    path('create/', idea_create_view, name="idea-create"),
    path('<int:idea_id>/delete/', idea_delete_view, name="idea-delete"),
    path('<int:idea_id>/', idea_detail_view, name="idea-detail"),
    path('action/', idea_action_view, name='idea-action'),
    path('list/', idea_list_view, name="idea-list")
]

