from rest_auth.serializers import PasswordResetSerializer

from account.forms import PasswordResetForm


class PasswordResetSerializer(PasswordResetSerializer):

    password_reset_form_class = PasswordResetForm
