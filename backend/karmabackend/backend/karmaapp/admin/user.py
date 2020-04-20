from django.contrib import admin

from karmaapp.models import UserProfile, User


class UserProfileAdmin(admin.ModelAdmin):
    class Meta:
        model = UserProfile

    pass


class UserAdmin(admin.ModelAdmin):
    class Meta:
        model = User

    pass


admin.site.register(UserProfile, UserProfileAdmin)
admin.site.register(User, UserAdmin)
