from django.test import TestCase
from karmaapp.models.user import User, UserProfile
from karmaapp.serializers.user_profile_serializer import UserProfileSerializer, UserSerializer
from rest_framework.request import Request


class TestUserSerializers(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(username="eddie@example.com")
        self.userprofile = UserProfile.objects.get(user=self.user)

    def test_user_profile_serializer_defaults(self):
        serializer = UserProfileSerializer(self.userprofile)
        data = serializer.data

        self.assertIsNone(data["dob"])
        self.assertIsNone(data["gender"])
        self.assertIsNone(data["address"])
        self.assertIsNone(data["city"])
        self.assertIsNone(data["postcode"])
        self.assertIsNone(data["telephone"])

    def test_user_serializer_defaults(self):
        serializer = UserSerializer(self.user)
        data = serializer.data

        self.assertIsNone(data["url"])
        self.assertIsNone(data["email"])
        self.assertIsNone(data["first_name"])
        self.assertIsNone(data["last_name"])
        self.assertEqual(self.userprofile, data["profile"])