from django.contrib import admin
from django.urls import include, path

from functools import partial

from django.contrib.auth.views import logout_then_login
from rest_framework import routers

from karmaapp.views import rest_auth

from karmaapp.views.charity_profile import CharityUserViewSet
from karmaapp.views.rest.create_user import CreateUserAPI
from karmaapp.views.rest.login_user import LoginUserAPI
from karmaapp.views.rest.user_profile import UserProfileAPI
from karmaapp.views.rest.charity_profile import CharityProfileAPI
from karmaapp.views.rest.cause import CausesAPI
from karmaapp.views.rest.activity import ActivityAPI


router = routers.DefaultRouter()
router.register(r"charity-user", CharityUserViewSet)

admin.site.site_header = "Karma App Header"
admin.site.site_title = "Karma App Admin"
admin.site.index_title = "Welcome to the Karma App admin portal"

urlpatterns = [
    path("logout/", partial(logout_then_login, login_url="/"), name="logout"),
    path("account/", include("account.urls")),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path(
        "rest-auth/login/",
        rest_auth.LoginView.as_view(),
        name="rest_login",
    ),
    path("rest-auth/", include("rest_auth.urls")),
    # Override default password change view
    path(
        "password/change/",
        rest_auth.PasswordChangeView.as_view(),
        name="rest_password_change",
    ),
    path(
        "users/",
        include(
            [
                path("", CreateUserAPI.as_view(), name="create-user-api"),
                path("login/", LoginUserAPI.as_view(), name="create-user-api"),
                path("user_profile/", UserProfileAPI.as_view(), name="user-profile"),
                path("charity_profile/", CharityProfileAPI.as_view(), name="charity-profile"),
            ]
        ),
    ),
    path(
        "causes/",
        include(
            [
                path("", CausesAPI.as_view(), name="causes"),
                path(
                    "<int:cause_id>/",
                    CausesAPI.as_view(),
                    name="causes",
                ),
            ]
        ),
    ),
    path(
        "activity/",
        include(
            [
                path("", ActivityAPI.as_view(), name="activity"),
                path(
                    "<int:activity_id>/",
                    ActivityAPI.as_view(),
                    name="activity",
                ),
            ]
        ),
    ),
    path('', include('karmaapp.urls')),
    path('', include('account.urls')),
    path('admin/', admin.site.urls),
    path("o/", include("oauth2_provider.urls", namespace="oauth2_provider")),
    path(r'', include('django.contrib.auth.urls')),
]