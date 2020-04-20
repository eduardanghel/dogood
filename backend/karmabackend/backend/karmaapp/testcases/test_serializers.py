from django.test import TestCase
from karmaapp.models.user import User, UserProfile
from karmaapp.serializers.user_profile_serializer import UserProfileSerializer, UserSerializer

class TestUserProfileSerializerTests(TestCase):

    def setUp(self):
        self.user = User.objects.create_user(username="eddie@example.com")

    def test_user_profile_serializer_defaults(self):
        getUserProfile=UserProfile.objects.get(user=self.user)
        serializer = UserProfileSerializer(getUserProfile)
        data = serializer.data
        userprofile = getUserProfile

        # self.assertEqual(userprofile.id, data["id"])
        self.assertFalse(data["terms_consent"])
        self.assertIsNone(data["dob"])
        self.assertIsNone(data["gender"])
        self.assertIsNone(data["address"])
        self.assertIsNone(data["city"])
        self.assertIsNone(data["postcode"])
        self.assertIsNone(data["telephone"])
