import logging
from http import HTTPStatus

from django.utils import timezone
from django.utils.translation import ugettext_lazy as _
from rest_auth import views as rest_auth_views
from rest_framework.exceptions import ValidationError
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from karmaapp.rest_framework import APILogView
from karmaapp.utils import authentication

logger = logging.getLogger(__name__)


class LoginView(rest_auth_views.LoginView, APILogView):
    def post(self, request, *args, **kwargs):
        # Overrides default method, so we can handle 401s correctly
        self.request = request
        self.serializer = self.get_serializer(
            data=self.request.data, context={"request": request}
        )

        # Validate the serializer, and chuck a 401/400 if there is a problem
        if not self.serializer.is_valid(raise_exception=False):
            if "non_field_errors" in self.serializer.errors:
                if self.serializer.errors["non_field_errors"] == [
                    "Unable to log in with provided credentials."
                ]:
                    logger.info(
                        f"Attempted to login user, but user isn't authorised - "
                        + f"wrong password? Error message: {self.serializer.errors}."
                    )
                    return Response(status=HTTPStatus.UNAUTHORIZED)
            # Raise the exception for any other path
            self.serializer.is_valid(raise_exception=True)

        # Otherwise, login
        self.login()
        return self.get_response()

    def process_login(self):
        self.token.delete()
        self.token.created = timezone.now()
        self.token.key = authentication.generate_unique_token()
        self.token.save()
        super().process_login()


class PasswordChangeView(rest_auth_views.PasswordChangeView):
    authentication_classes = (authentication.ExpiringTokenAuthentication,)
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except ValidationError as validationerror:
            return Response(
                f"{validationerror}", status=HTTPStatus.UNPROCESSABLE_ENTITY
            )
        serializer.save()
        return Response({"detail": _("New password has been saved.")})
