
from django.urls import path
from .views import profile_detail_view, profile_update_view, current_profile_view



urlpatterns = [

    path('<str:username>/', profile_detail_view),
    # path('', current_profile_view, name='profile'),
    path('edit/', profile_update_view),

]
