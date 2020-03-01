from django.contrib import admin

from karmaapp.models.cause import Cause


class CauseAdmin(admin.ModelAdmin):
    pass


admin.site.register(Cause, CauseAdmin)
