# from karmaapp.models.user import User
# from django.test import TestCase
#
# from karmaapp.models.activity import Activity
# from karmaapp.models.user import CharityProfile, User
# from karmaapp.models.cause import Cause
# from oauth2_provider.models import AccessToken, Application
# from oauth2_provider.settings import oauth2_settings
# from django.utils import timezone
# import oauthlib.common
# from datetime import timedelta
# from decimal import Decimal
# from http import HTTPStatus
#
# from django.test import Client
#
# class TestActivityModel(TestCase):
#     def setUp(self):
#         self.charity_user = User.objects.create(is_charity=True, username="charity", password="testPassword")
#         self.charityProfile = CharityProfile.objects.get(user=self.charity_user)
#         self.causes = Cause.objects.create(name="test cause")
#         self.activity = Activity.objects.create()
#
#         self.application = Application.objects.create(
#             client_type="confidential",
#             authorization_grant_type="password",
#             name="karma",
#         )
#         self.access_token = AccessToken.objects.create(
#             user=self.charity_user,
#             application=self.application,
#             expires=timezone.now()
#                     + timedelta(seconds=oauth2_settings.ACCESS_TOKEN_EXPIRE_SECONDS),
#             token=oauthlib.common.generate_token(),
#             scope="read write",
#         )
#
#         login = {
#             "email": self.charity_user.email,
#             "username": self.charity_user.username,
#             "password": "123456",
#         }
#         r = self.client.post("/rest-auth/login/", login, format="json")
#         self.client.credentials(HTTP_AUTHORIZATION="Token " + r.json()["key"])
#
#
#     def testCreateActivity(self):
#
#         self.assertNull(self.causes.logo)
#
#         self.assertNull(self.activity.name)
#         self.assertNull(self.activity.date)
#         self.assertNull(self.activity.time)
#         self.assertNull(self.activity.number_spots)
#         self.assertNull(self.activity.address)
#         self.assertNull(self.activity.activity_description)
#         self.assertNull(self.activity.email)
#         self.assertNull(self.activity.telephone)
#         self.assertNull(self.activity.photo)
#         self.assertNull(self.activity.age_check)
#         self.assertNull(self.activity.photo_check)
#         self.assertNull(self.activity.physical_activity_check)
#         self.assertNull(self.activity.additional_info_check)
#
#     def testUpdateActivity(self):
#         Activity.objects.get(activity=self.activity).update(
#             name="Test Activity",
#             number_spots=3,
#             address="Test Address",
#             activity_description="Test Description",
#             email="test@test.com"
#         )
#         self.assertEqual("Test Activity", self.activity.name)
#         self.assertEqual(3, self.activity.number_spots)
#         self.assertEqual("Test Address", self.activity.address)
#         self.assertEqual("Test Description", self.activity.activity_description)
#         self.assertEqual("test@test.com", self.activity.email)
#
#
#     def testCanGetActivity(self):
#         c = Client()
#         response = c.get(f"/causes/{self.activity.id}/")
#         self.assertEqual(200, response.status_code)
#
#         self.assertEqual("Test Activity")