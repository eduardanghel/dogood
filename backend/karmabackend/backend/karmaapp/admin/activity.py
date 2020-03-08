from django.contrib import admin

from karmaapp.models.activity import Activity


class ActivityAdmin(admin.ModelAdmin):
    pass


admin.site.register(Activity, ActivityAdmin)
