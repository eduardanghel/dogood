from django.contrib import admin
from django.urls import include, path

from functools import partial

from django.contrib.auth.views import logout_then_login
from rest_framework import routers

from karmaapp.views.charity_profile import CharityUserViewSet
from karmaapp.views.rest.create_user import CreateUserAPI
from karmaapp.views.rest.login_user import LoginUserAPI
from karmaapp.views.rest.user_profile import UserProfileAPI
from karmaapp.views.rest.charity_profile import CharityProfileAPI
from karmaapp.views.rest.cause import CausesAPI

router = routers.DefaultRouter()
router.register(r"charity-user", CharityUserViewSet)

admin.site.site_header = "Karma App Header"
admin.site.site_title = "Karma App Admin"
admin.site.index_title = "Welcome to the Karma App admin portal"

urlpatterns = [
    path("logout/", partial(logout_then_login, login_url="/"), name="logout"),
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
    ),    path('', include('karmaapp.urls')),
    path('', include('account.urls')),
    path('admin/', admin.site.urls),
    path("o/", include("oauth2_provider.urls", namespace="oauth2_provider")),
    path(r'', include('django.contrib.auth.urls')),
]