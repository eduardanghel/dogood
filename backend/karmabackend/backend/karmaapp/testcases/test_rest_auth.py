from datetime import timedelta
from http import HTTPStatus

import oauthlib.common
from karmaapp.models.user import User
from django.core.management import call_command
from django.utils import timezone
from oauth2_provider.models import AccessToken, Application
from oauth2_provider.settings import oauth2_settings
from rest_framework.test import APIClient, APITestCase


class TestRestAuth(APITestCase):

    def setUp(self):
        #  our testcases will start at midnight
        self.now = timezone.now().replace(
            hour=0, minute=0, second=0, microsecond=0
        ) - timedelta(days=1)

        self.client = APIClient()
        self.tom = User.objects.create_user(
            username="username", password="password123", email="username@emaill.com"
        )
        self.application = Application.objects.create(
            client_type="confidential",
            authorization_grant_type="password",
            name="app.karma-zomp.co.uk",
        )
        self.access_token = AccessToken.objects.create(
            user=self.tom,
            application=self.application,
            expires=timezone.now()
            + timedelta(seconds=oauth2_settings.ACCESS_TOKEN_EXPIRE_SECONDS),
            token=oauthlib.common.generate_token(),
            scope="read write",
        )

    def test_rest_auth_handles_invalid_password(self):
        login = {
            "email": "invalid@invalid.com",
            "username": "invalid@invalid.com",
            "password": "failure_is_inevitable",
        }
        r = self.client.post("/rest-auth/login/", login, format="json")
        self.assertEqual(
            r.status_code, HTTPStatus.UNAUTHORIZED, "failed to login - invalid user",
        )

    def test_rest_auth_login_works_if_valid_user(self):
        email = "username@emaill.com"
        username = "username"
        password = "password123"
        login = {"email": email, "username": username, "password": password}
        r = self.client.post("/rest-auth/login/", login, format="json")
        self.assertEqual(r.status_code, HTTPStatus.OK, "failed to login")
        token = r.json()["key"]
        self.client.credentials(HTTP_AUTHORIZATION="Token " + token)
        self.assertIsNotNone(token)

    def test_rest_auth_handles_malformed_data(self):
        login = {
            "email": "invalid@invalid.com",
            "username": "invalid@invalid.com",
            "passwordadasdasd": "faiilure_is_inevitable",
        }
        r = self.client.post("/rest-auth/login/", login, format="json")
        self.assertEqual(
            r.status_code, HTTPStatus.BAD_REQUEST, "failed to login - malformed data",
        )

    def test_MyPasswordChangeView_post(self):

        self.client.force_authenticate(user=self.tom, token=self.access_token)

        # Test incorrect fields ...
        response = self.client.post(
            "/password/change/",
            {
                "old_password": "password123",
                "new_password_1": "password",
                "new_password_2": "password",
            },
            format="json",
        )
        self.assertEqual(response.status_code, HTTPStatus.UNPROCESSABLE_ENTITY)

        # Test too simple passwords
        response = self.client.post(
            "/password/change/",
            {
                "old_password": "password123",
                "new_password1": "password",
                "new_password2": "password",
            },
            format="json",
        )
        self.assertEqual(response.status_code, HTTPStatus.UNPROCESSABLE_ENTITY)

        # Test a successful switch
        response = self.client.post(
            "/password/change/",
            {
                "old_password": "password123",
                "new_password1": "password_hArDC0re!",
                "new_password2": "password_hArDC0re!",
            },
            format="json",
        )
        self.assertEqual(response.status_code, HTTPStatus.OK)
