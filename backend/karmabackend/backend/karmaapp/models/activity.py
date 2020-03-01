from django.db import models

from karmaapp.models.cause import Cause
from karmaapp.models.user import CharityProfile


class Activity(models.Model):
    name = models.TextField(blank=True, null=True)
    charity = models.ManyToManyField(CharityProfile)
    causes_type = models.ManyToManyField(Cause)
    date = models.DateField(blank=True, null=True)
    time = models.TimeField(blank=True, null=True)
    number_spots = models.PositiveIntegerField(blank=True, null=True)
    address = models.CharField(max_length=100, blank=True, null=True)
    activity_description = models.TextField(blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    telephone = models.CharField(max_length=12, blank=True, null=True)
    photo = models.URLField(blank=True, null=True)

    age_check = models.BooleanField(default=True, blank=True, null=True)
    photo_check = models.BooleanField(default=False, blank=True, null=True)
    physical_activity_check = models.BooleanField(default=False, blank=True, null=True)
    additional_info_check = models.BooleanField(default=False, blank=True, null=True)
