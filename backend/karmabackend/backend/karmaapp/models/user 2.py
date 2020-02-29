from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import ugettext_lazy as _
from django.conf import settings


class User(AbstractUser):
    first_name = models.CharField(_('first name'), max_length=30, blank=True)
    last_name = models.CharField(_('last name'), max_length=150, blank=True)
    username = models.CharField(blank=True, null=True, max_length=50)
    email = models.EmailField(_('email address'), unique=True)


    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', 'first_name', 'last_name']

    def __str__(self):
        return "{}".format(self.email)


class UserProfile(models.Model):
    GENDER_CHOICES = (
        ('m', 'Male'),
        ('f', 'Female'),
        ('x', 'Non-binary'),
    )

    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='profile')
    dob = models.DateField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=True)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=50)
    postcode = models.CharField(max_length=8)
    telephone = models.PositiveIntegerField(default=0)