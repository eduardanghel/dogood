import logging

from django.contrib.auth import forms
from post_office import mail
from post_office.models import PRIORITY, EmailTemplate

logger = logging.getLogger(__name__)


class PasswordResetForm(forms.PasswordResetForm):
    def send_mail(
        self,
        subject_template_name,
        email_template_name,
        context,
        from_email,
        to_email,
        html_email_template_name=None,
    ):
        """
        Override the default and send emails via Django Post-Office instead of the standard mail
        """

        template = EmailTemplate.objects.get(name="password_reset")
        mail.create(
            recipients=[to_email],  # List of email addresses also accepted
            context=context,
            template=template,
            priority=PRIORITY.high,
            sender=from_email,
        )
