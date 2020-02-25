from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save


class UserProfile(models.Model):
    GENDER_CHOICES = (
        ('m', 'Male'),
        ('f', 'Female'),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birth_date = models.DateField(null=True)
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, null=True)
    address = models.CharField(max_length=150, null=True)
    postcode = models.CharField(max_length=8, null=True)
    city = models.CharField(max_length=50, null=True)
    telephone = models.PositiveIntegerField(default=0)

def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)

post_save.connect(create_user_profile, sender=User)