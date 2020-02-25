from django.contrib import admin

from .models import Question
from .models import UserProfile

admin.site.register(Question)
admin.site.register(UserProfile)
