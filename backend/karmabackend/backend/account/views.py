from django.contrib.auth import views as auth_views

from account import forms

templates_dir = "templates/reg"


# Password reset
class WebResetPasswordRequest(auth_views.PasswordResetView):
    template_name = f"{templates_dir}/password_reset_form.html"
    form_class = forms.PasswordResetForm


class WebResetPasswordSent(auth_views.PasswordResetDoneView):
    template_name = f"{templates_dir}/password_reset_sent.html"


class WebResetPasswordConfirm(auth_views.PasswordResetConfirmView):
    template_name = f"{templates_dir}/password_reset_confirm.html"


class WebResetPasswordComplete(auth_views.PasswordResetCompleteView):
    template_name = f"{templates_dir}/password_reset_complete.html"


# password change
class WebPasswordChange(auth_views.PasswordChangeView):
    template_name = f"{templates_dir}/password_change_form.html"
    title = "Change Password"


class WebPasswordChangeComplete(auth_views.PasswordChangeDoneView):
    template_name = f"{templates_dir}/password_change_complete.html"
