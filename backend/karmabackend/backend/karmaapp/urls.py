from django.urls import path, include
from rest_framework import routers

from karmaapp.views.charity_profile import CharityUserViewSet

router = routers.DefaultRouter()
router.register(r"charity-user", CharityUserViewSet)

urlpatterns = [
    path(r'', include(router.urls)),
    path(r'auth/', include('rest_auth.urls')),
]
