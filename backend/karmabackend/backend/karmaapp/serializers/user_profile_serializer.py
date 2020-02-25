from rest_framework import serializers
from karmaapp.models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ("user", "birth_date", "genre", "address", "postcode", "city", "telephone")
