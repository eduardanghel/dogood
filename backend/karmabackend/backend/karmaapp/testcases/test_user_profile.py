# from django.test import TestCase
# from django.contrib.auth.models import User
# from karmaapp.models.userprofile import UserProfile
#
# class UserProfileTest(TestCase):
#     def test_create_user_creates_profile(self):
#         self.assertEqual(0, User.objects.count())
#         self.assertEqual(0, UserProfile.objects.count())
#
#         user = User.objects.create(username="testuser", email='test@user.com', password='password')
#         self.assertEqual('test@user.com', user.email)
#         self.assertTrue(user.is_active)
#         self.assertFalse(user.is_staff)
#         self.assertFalse(user.is_superuser)
#         self.assertEqual("testuser", user.username)
#
#         self.assertEqual(1, UserProfile.objects.count())