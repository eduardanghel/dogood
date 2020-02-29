from datetime import timedelta

from django.db import models
from django.utils import timezone
from oauth2_provider.models import AccessToken, Application, RefreshToken
import oauthlib.common



from karmaapp.models.user import User

class UserProfile(models.Model):
    GENDER_CHOICES = (
        ('m', 'Male'),
        ('f', 'Female'),
        ('x', 'Non-binary'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, related_name='user_profile')
    dob = models.DateField(blank=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=True, blank=True)
    address = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=50, blank=True)
    postcode = models.CharField(max_length=8, blank=True)
    telephone = models.CharField(max_length=12, blank=True)
    terms_consent = models.BooleanField(default=False)
    terms_consent_datetime = models.DateTimeField(null=True, default=None)
    token = models.CharField(max_length=200, blank=True, default="")
    is_activated = models.BooleanField(default=True)
    activation_token = models.CharField(max_length=100, blank=True, default="")
    activation_token_valid_until = models.DateTimeField(default=timezone.now)
    password_reset_token = models.CharField(max_length=100, blank=True, default="")
    password_reset_token_valid_until = models.DateField(default=timezone.now)
    magic_link_token = models.CharField(max_length=100, blank=True, default="")
    magic_link_token_valid_until = models.DateField(default=timezone.now)

    def get_access_token(self):
        access_token = AccessToken.objects.create(
            user=self.user,
            application=Application.objects.filter(name="app.karma-zomp.co.uk").first(),
            token=oauthlib.common.generate_token(),
            expires=timezone.now() + timedelta(minutes=15),
        )
        return access_token

    def get_refresh_token(self, application):
        access_token = AccessToken.objects.create(
            user=self.user,
            application=Application.objects.get(name=application),
            token=oauthlib.common.generate_token(),
            expires=timezone.now() + timedelta(minutes=15),
        )
        refresh_token = RefreshToken.objects.create(
            user=self.user,
            token=oauthlib.common.generate_token(),
            application=Application.objects.get(name=application),
            access_token=access_token,
            revoked=timezone.now() + timedelta(minutes=15),
        )
        return refresh_token