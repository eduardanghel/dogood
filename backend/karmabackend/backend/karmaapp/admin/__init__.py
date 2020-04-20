from django.conf.locale.en import formats as en_formats

from karmaapp.admin import (  # noqa
    user,
    charities,
    activity,
    cause
)

# Monkey patch Django's DATETIME_FORMAT for english
en_formats.DATETIME_FORMAT = "d/m/y H:i:s"
