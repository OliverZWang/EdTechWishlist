from django.urls import path
from .views import UserDetailView, UserCreateView, UserListView, UserUpdateView, UserDeleteView


app_name = "users"
urlpatterns = [
    path("<int:id>/", UserDetailView.as_view(), name="user-detail"), 
    path("create/", UserCreateView.as_view(), name="user-create"),
    path("", UserListView.as_view(), name="user-list"),
    path("<int:id>/update/", UserUpdateView.as_view(), name="user-update"),
    path("<int:id>/delete/", UserDeleteView.as_view(), name="user-delete")
]

