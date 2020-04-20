from django.contrib import admin

from karmaapp.models.activity import Activity


class ActivityAdmin(admin.ModelAdmin):
    class Meta:
        model = Activity

    pass


admin.site.register(Activity, ActivityAdmin)
