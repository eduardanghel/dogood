from django.contrib import admin

from .admin.user import User, UserProfile

admin.site.register(User)
admin.site.register(UserProfile)
