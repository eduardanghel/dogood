from django.contrib import admin

from karmaapp.models import CharityProfile


class CharityAdmin(admin.ModelAdmin):
    pass


admin.site.register(CharityProfile, CharityAdmin)
