from django.contrib import admin

from .admin.charities import CharityProfile
from .admin.user import User, UserProfile

admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(CharityProfile)
