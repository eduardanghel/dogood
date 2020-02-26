from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save


class CharityProfile(models.Model):
    ORGANISATION_TYPE = (
        ('NGO', 'Non Governmental Organisation'),
        ('XX1', 'Option 2'),
        ('XX2', 'Option 3'),
    )
    EXEMPTION_TYPE = (
        ('1', 'Low income'),
        ('2', 'Exemption from regulation'),
    )
    charity_name = models.OneToOneField(User, on_delete=models.CASCADE)
    date_of_registration = models.DateField(null=True)
    type = models.CharField(max_length=3, choices=ORGANISATION_TYPE, null=True)
    charity_number = models.IntegerField()
    exemption_type = models.CharField(max_length=1, choices=EXEMPTION_TYPE, null=True)
    logo = models.URLField()
