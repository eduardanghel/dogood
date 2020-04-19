from datetime import timedelta

import oauthlib.common
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone
from oauth2_provider.models import AccessToken, Application, RefreshToken

from karmaapp.models.cause import Cause


class User(AbstractUser):
    is_charity = models.BooleanField(default=False, blank=True, null=True)


class CharityProfile(models.Model):
    CHARITY_TYPE = (
        ('1', 'Non-government organisation'),
        ('2', 'Other type'),
        ('3', 'Other type 2'),
    )
    EXEMPTION_TYPE = (
        ('1', 'Low income/excepted'),
        ('2', 'Exempt by Charity Commission'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, related_name='charity_profile')
    date_of_registration = models.DateField(null=True, blank=True)
    type = models.CharField(max_length=1, choices=CHARITY_TYPE, null=True, blank=True)
    charity_number = models.IntegerField(null=True, blank=True)
    exemption = models.CharField(max_length=1, choices=CHARITY_TYPE, null=True, blank=True)
    logo = models.URLField(null=True, blank=True)
    causes = models.ManyToManyField(Cause)
    terms_consent = models.BooleanField(default=False, null=True, blank=True)
    terms_consent_datetime = models.DateTimeField(null=True, default=None, blank=True)
    token = models.CharField(max_length=200, blank=True, default="", null=True)
    is_activated = models.BooleanField(default=True, null=True, blank=True)
    activation_token = models.CharField(max_length=100, blank=True, default="", null=True)
    activation_token_valid_until = models.DateTimeField(default=timezone.now, null=True, blank=True)
    password_reset_token = models.CharField(max_length=100, blank=True, default="", null=True)
    password_reset_token_valid_until = models.DateField(default=timezone.now, null=True, blank=True)

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


class UserProfile(models.Model):
    GENDER_CHOICES = (
        ('0', 'Male'),
        ('1', 'Female'),
        ('2', 'Non-binary'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, related_name='user_profile')
    dob = models.DateField(blank=True, null=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=True, blank=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    city = models.CharField(max_length=50, blank=True, null=True)
    postcode = models.CharField(max_length=8, blank=True, null=True)
    telephone = models.CharField(max_length=12, blank=True, null=True)
    causes = models.ManyToManyField(Cause)
    terms_consent = models.BooleanField(default=False, blank=True, null=True)
    terms_consent_datetime = models.DateTimeField(null=True, default=None, blank=True)
    token = models.CharField(max_length=200, blank=True, default="", null=True)
    is_activated = models.BooleanField(default=True, blank=True, null=True)
    activation_token = models.CharField(max_length=100, blank=True, default="", null=True)
    activation_token_valid_until = models.DateTimeField(default=timezone.now, blank=True, null=True)
    password_reset_token = models.CharField(max_length=100, blank=True, default="", null=True)
    password_reset_token_valid_until = models.DateField(default=timezone.now, blank=True, null=True)

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


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if instance.is_charity:
        CharityProfile.objects.get_or_create(user=instance)
    else:
        UserProfile.objects.get_or_create(user=instance)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    if instance.is_charity:
        instance.charity_profile.save()
    else:
        UserProfile.objects.get_or_create(user=instance)
