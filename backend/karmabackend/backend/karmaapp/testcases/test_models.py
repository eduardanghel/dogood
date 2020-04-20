from karmaapp.models.user import User
from django.test import TestCase

from karmaapp.models.activity import Activity
from karmaapp.models.user import CharityProfile, User
from karmaapp.models.cause import Cause

from django.test import Client

class TestActivityModel(TestCase):
    def setUp(self):
        self.charity_user = User.objects.create(is_charity=True, username="charity", password="testPassword")
        self.charityProfile = CharityProfile.objects.get(user=self.charity_user)
        self.causes = Cause.objects.create(name="test cause")
        self.activity = Activity.objects.create(charity=charityProfile, causes_type=self.causes)


    def testCreateActivity(self):
        self.assertTrue(self.charityProfile)

        self.assertNull(self.causes.logo)

        self.assertNull(self.activity.name)
        self.assertNull(self.activity.date)
        self.assertNull(self.activity.time)
        self.assertNull(self.activity.number_spots)
        self.assertNull(self.activity.address)
        self.assertNull(self.activity.activity_description)
        self.assertNull(self.activity.email)
        self.assertNull(self.activity.telephone)
        self.assertNull(self.activity.photo)
        self.assertNull(self.activity.age_check)
        self.assertNull(self.activity.photo_check)
        self.assertNull(self.activity.physical_activity_check)
        self.assertNull(self.activity.additional_info_check)

    def testUpdateActivity(self):
        self.activity.update(
            name="Test Activity",
            number_spots=3,
            address="Test Address",
            activity_description="Test Description",
            email="test@test.com"
        )
        self.assertEqual("Test Activity", self.activity.name)
        self.assertEqual(3, self.activity.number_spots)
        self.assertEqual("Test Address", self.activity.address)
        self.assertEqual("Test Description", self.activity.activity_description)
        self.assertEqual("test@test.com", self.activity.email)


    def testCanGetActivity(self):
        c = Client()
        response = c.get(f"/causes/{self.}")