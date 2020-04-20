from django.contrib.auth.models import Group
from karmaapp.models.user import User
from django.core import mail
from django.test import TestCase
from django.urls import reverse


class PasswordResetTests(TestCase):

    def setUp(self):
        super().setUp()
        testUser = User.objects.create_user(
            username="testUserName", password="password123", email="test@karma-zomp.co.uk"
        )

    def test_reset_password_email_dosent_send_if_user_doesnt_exist(self):
        """
        Test to see if an email is not sent when a password is reset if the
        user doesn't exist.
        """
        response = self.client.post(
            reverse("password_reset"), {"email": "not.an.email@karma-zomp.co.uk"}
        )
        self.assertEqual(response.status_code, 302)
        self.assertEqual(len(mail.outbox), 0)
