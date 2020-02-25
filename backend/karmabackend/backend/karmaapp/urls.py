from django.urls import path

from karmaapp.views.user_profile import UserProfileCreate

urlpatterns = [
    path('api/userprofile/', UserProfileCreate.as_view() ),
]