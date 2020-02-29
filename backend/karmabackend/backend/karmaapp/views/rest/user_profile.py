import logging
from http import HTTPStatus

from django.http import JsonResponse
from oauth2_provider.contrib.rest_framework import OAuth2Authentication
from rest_framework.response import Response

from rest_framework.views import APIView
from karmaapp.views.rest.serializers.user_profile import UserProfileWriteSerializer, UserProfileSerializer

from karmaapp import authentication
logger = logging.getLogger(__name__)


class UserProfileAPI(APIView):
    authentication_classes = [
        authentication.ExpiringTokenAuthentication,
        OAuth2Authentication,
    ]

    def get(self, request):
        """
        Returns the user profile for the current user.
        """
        serializer = UserProfileSerializer(request.user.userprofile)
        return JsonResponse(serializer.data)

    def post(self, request):
        """
        Create a user profile for the current user.
        """
        # If they haven't ticked the terms, we aren't letting them them through
        if not request.data.get("terms_consent"):
            return Response(
                data="Terms must be accepted!", status=HTTPStatus.BAD_REQUEST
            )

        serializer = UserProfileWriteSerializer(
            data=request.data, partial=False, context={"user": request.user}
        )
        response = self._update_user_profile(request, request.user, serializer)

        return response

    def patch(self, request):
        """
        Updates the current user's user profile.
        """
        serializer = UserProfileWriteSerializer(
            request.user.userprofile, data=request.data, partial=True
        )
        return self._update_user_profile(request, request.user, serializer)

    def _update_user_profile(self, request, user, serializer):
        serializer.is_valid(raise_exception=True)

        serializer.save()
        return Response(UserProfileSerializer(user.userprofile).data)