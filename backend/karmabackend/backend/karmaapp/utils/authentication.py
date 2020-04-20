import binascii
import logging
import os
from datetime import datetime

import pytz
from django.conf import settings
from rest_framework import exceptions
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token

logger = logging.getLogger(__name__)


def generate_unique_token() -> str:
    key = binascii.hexlify(os.urandom(20)).decode()
    while Token.objects.filter(key=key).count() != 0:
        key = binascii.hexlify(os.urandom(20)).decode()
    return key


class ExpiringTokenAuthentication(TokenAuthentication):
    def authenticate_credentials(self, key):
        logger.debug("authenticating: %s", key)
        (user, token) = super().authenticate_credentials(key)

        utc_now = datetime.utcnow()
        utc_now = utc_now.replace(tzinfo=pytz.utc)

        if token.created < utc_now - settings.TOKEN_EXPIRE_TIME:
            raise exceptions.AuthenticationFailed("Token has expired")

        logger.debug("granted access for: %s", key)
        return user, token
