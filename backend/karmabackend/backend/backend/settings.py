"""
Django settings for backend project.

Generated by 'django-admin startproject' using Django 3.0.3.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os
import datetime


# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '0e!!hkgk08p3i0$1d7_o7sgdq@k&@=a4)#aksovz89%t_#e*8u'

ALLOWED_HOSTS = ["192.168.1.215", "localhost", "127.0.0.1", "*"]

# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    "django.contrib.humanize",
    'karmaapp.apps.KarmaappConfig',
    'rest_framework',
    'rest_framework.authtoken',
    'rest_auth',
    "django.contrib.sites",
    "rest_auth.registration",
    "post_office",
    "oauth2_provider",
]

CSRF_USE_SESSIONS = True
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_HSTS_PRELOAD = (
    True  # https://www.troyhunt.com/understanding-http-strict-transport/
)
SESSION_COOKIE_HTTPONLY = True
SESSION_EXPIRE_AT_BROWSER_CLOSE = True
X_FRAME_OPTIONS = "DENY"

LOGOUT_REDIRECT_URL = "/"

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'

# DRF
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated'
    ],
}

# django.contrib.auth
AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator"
    },
    {"NAME": "django.contrib.auth.password_validation.MinimumLengthValidator"},
    {"NAME": "django.contrib.auth.password_validation.CommonPasswordValidator"},
    {"NAME": "django.contrib.auth.password_validation.NumericPasswordValidator"},
]

AUTHENTICATION_BACKENDS = [
    "django.contrib.auth.backends.ModelBackend",
]

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases


if os.getenv('GAE_APPLICATION', None):
    # Running on production App Engine, so connect to Google Cloud SQL using
    # the unix socket at /cloudsql/<your-cloudsql-connection string>

    # SECURITY WARNING: don't run with debug turned on in production!
    DEBUG = False
    DATABASES = {
        'default': {
            'ENGINE': "django.db.backends.postgresql",
            'HOST': '/cloudsql/karma-backend-268618:europe-west1:karma-sql',
            'USER': 'karma2',
            'PASSWORD': 'Prowas2u',
            'NAME': 'karma',
        }
    }
else:
    # Running locally so connect to either a local MySQL instance or connect to
    # Cloud SQL via the proxy. To start the proxy via command line:
    #
    #     $ cloud_sql_proxy -instances=[INSTANCE_CONNECTION_NAME]=tcp:3306
    #
    # See https://cloud.google.com/sql/docs/mysql-connect-proxy

    # SECURITY WARNING: don't run with debug turned on in production!

    DEBUG = True
    DATABASES = {
        "default": {
            "ENGINE": "django.db.backends.postgresql",
            'HOST': '127.0.0.1',
            'PORT': '3306',
            'NAME': 'karma',
            'USER': 'karma2',
            'PASSWORD': 'Prowas2u',
        }
    }

# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_ROOT = 'static'
STATIC_URL = '/static/'


# JWT Settings

JWT_AUTH = {
    # If the secret is wrong, it will raise a jwt.DecodeError telling you as such. You can still get at the payload by setting the JWT_VERIFY to False.
    'JWT_VERIFY': True,

    # You can turn off expiration time verification by setting JWT_VERIFY_EXPIRATION to False.
    # If set to False, JWTs will last forever meaning a leaked token could be used by an attacker indefinitely.
    'JWT_VERIFY_EXPIRATION': True,

    # This is an instance of Python's datetime.timedelta. This will be added to datetime.utcnow() to set the expiration time.
    # Default is datetime.timedelta(seconds=300)(5 minutes).
    'JWT_EXPIRATION_DELTA': datetime.timedelta(hours=1),

    'JWT_ALLOW_REFRESH': True,
    'JWT_AUTH_HEADER_PREFIX': 'JWT',
}
REST_USE_JWT = True

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
# Mailgun settings
EMAIL_HOST = "smtp.eu.mailgun.org"
EMAIL_PORT = 587
EMAIL_HOST_USER = "postmaster@mg.karma-zomp.co.uk"
EMAIL_HOST_PASSWORD = "a293cb0e5954f8a2e4da6819b8e628ae-9dda225e-68f3d2b6"
EMAIL_USE_TLS = True

# Default email addresses
SERVER_EMAIL = "no-reply@karma-zomp.co.uk"
DEFAULT_FROM_EMAIL = "no-reply@karma-zomp.co.uk"


# django-allauth
# https://django-allauth.readthedocs.io/en/latest/
ACCOUNT_EMAIL_VERIFICATION = "none"


# django-oauth-toolkit
# https://django-oauth-toolkit.readthedocs.io/en/latest/
OAUTH2_PROVIDER = {
    "SCOPES": {
        "read": "Read scope",
        "write": "Write scope",
        "groups": "Access to your groups",
        "introspection": "Introspect token scope",
    },
}

# django-rest-auth settings: see:
# http://django-rest-auth.readthedocs.io/en/latest/configuration.html
OLD_PASSWORD_FIELD_ENABLED = True
REST_AUTH_SERIALIZERS = {
    "LOGIN_SERIALIZER": "karmaapp.serializers.serializers.LoginSerializer",
    "PASSWORD_RESET_SERIALIZER": "account.serializers.PasswordResetSerializer",
}

# django-rest-framework
# https://www.django-rest-framework.org/api-guide/settings/
REST_FRAMEWORK = {
    "TEST_REQUEST_DEFAULT_FORMAT": "json",
    "DEFAULT_AUTHENTICATION_CLASSES": (
        "oauth2_provider.contrib.rest_framework.OAuth2Authentication",
        "utils.authentication.ExpiringTokenAuthentication",
    ),
    "DEFAULT_PERMISSION_CLASSES": ("rest_framework.permissions.IsAuthenticated",),
    "DEFAULT_RENDERER_CLASSES": ("rest_framework.renderers.JSONRenderer",),
    "DEFAULT_PAGINATION_CLASS": None,
    "PAGE_SIZE": None,
}