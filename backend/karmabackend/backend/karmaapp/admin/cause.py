from django.contrib import admin

from karmaapp.models.cause import Cause


class CauseAdmin(admin.ModelAdmin):
    class Meta:
        model = Cause

    pass


admin.site.register(Cause, CauseAdmin)
