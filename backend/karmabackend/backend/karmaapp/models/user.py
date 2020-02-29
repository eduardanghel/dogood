from django.contrib.auth.models import AbstractUser
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from karmaapp.models.user_profile import UserProfile
from karmaapp.models.charities import CharityProfile


class User(AbstractUser):
    is_charity = models.BooleanField(default=True)


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if instance.is_charity:
        CharityProfile.objects.get_or_create(user=instance)
    else:
        UserProfile.objects.get_or_create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, created=False, **kwargs):
    if created:
        group = get_group(instance)
        if sender.email is not None and len(str(instance.email)) >= 3:
            slack.post_slack_message_to_new_app_registrations(
                text=f"New user added! E-mail address starts: "
                f"{instance.email[:3]}***. {group}"
            )
        else:
            slack.post_slack_message_to_new_app_registrations(
                text=f"New user added! E-mail address starts: <UNKNOWN EMAIL>. "
                f"{group}"
            )

    instance.userprofile.save()