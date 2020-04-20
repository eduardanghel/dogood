from django.contrib import admin

from karmaapp.models import CharityProfile


class CharityAdmin(admin.ModelAdmin):
    class Meta:
        model = CharityProfile

    pass


admin.site.register(CharityProfile, CharityAdmin)
