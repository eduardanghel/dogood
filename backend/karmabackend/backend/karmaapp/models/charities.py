from django.db import models
from django.conf import settings


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

    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    date_of_registration = models.DateField()
    type = models.CharField(max_length=1, choices=CHARITY_TYPE, null=True)
    charity_number = models.IntegerField()
    exemption = models.CharField(max_length=1, choices=CHARITY_TYPE, null=True)
    logo = models.URLField(blank=True)