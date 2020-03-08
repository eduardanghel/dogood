from django.urls import path

from account import views

urlpatterns = [
    path(
        "password_reset/",
        views.WebResetPasswordRequest.as_view(),
        name="password_reset",
    ),
    path(
        "password_reset/sent",
        views.WebResetPasswordSent.as_view(),
        name="password_reset_done",
    ),
    path(
        "reset/<str:uidb64>/<str:token>",
        views.WebResetPasswordConfirm.as_view(),
        name="password_reset_confirm",
    ),
    path(
        "reset/complete",
        views.WebResetPasswordComplete.as_view(),
        name="password_reset_complete",
    ),
    path("password_change/", views.WebPasswordChange.as_view(), name="password_change"),
    path(
        "password_change/complete",
        views.WebPasswordChangeComplete.as_view(),
        name="password_change_done",
    ),
]
