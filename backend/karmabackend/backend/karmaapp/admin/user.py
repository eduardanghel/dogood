from django.contrib import admin

from karmaapp.models import UserProfile, User


class UserProfileAdmin(admin.ModelAdmin):
    pass


class UserAdmin(admin.ModelAdmin):
    pass


admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(User, UserAdmin)
