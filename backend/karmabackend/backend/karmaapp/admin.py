from django.contrib import admin

from .admin.user import User, UserProfile
from .admin.charities import CharityProfile

admin.site.register(User)
admin.site.register(UserProfile)
admin.site.register(CharityProfile)
