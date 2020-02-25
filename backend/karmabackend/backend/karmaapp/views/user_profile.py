from karmaapp.models import UserProfile
from karmaapp.serializers.user_profile_serializer import UserProfileSerializer
from rest_framework import generics

class UserProfileCreate(generics.ListCreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer