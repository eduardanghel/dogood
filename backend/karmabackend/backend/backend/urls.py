from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('karmaapp/', include('karmaapp.urls')),
    path('admin/', admin.site.urls),
]