from django.contrib import admin
from django.urls import include, path
from rest_framework_jwt.views import (
    obtain_jwt_token,
    refresh_jwt_token,
    verify_jwt_token
)

from functools import partial

from django.contrib.auth.views import logout_then_login
from rest_framework import routers

from karmaapp.views.charity_profile import CharityUserViewSet
from karmaapp.views.rest.create_user import CreateUserAPI
from karmaapp.views.rest.login_user import LoginUserAPI
from karmaapp.views.rest.user_profile import UserProfileAPI

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
                path("userprofile/", UserProfileAPI.as_view(), name="user-profile"),
                # path("charity-profile", CharityProfileAPI.as_view(), name="charity-profile"),
            ]
        ),
    ),
    path('', include('karmaapp.urls')),
    path('admin/', admin.site.urls),
    path(r'api-token-auth/', obtain_jwt_token),
    path(r'api-token-refresh/', refresh_jwt_token),
    path(r'api-token-verify/', verify_jwt_token),
    path(r'', include('django.contrib.auth.urls')),
]