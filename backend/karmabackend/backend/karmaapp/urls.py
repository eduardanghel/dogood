from django.urls import path, include
from rest_framework import routers
from karmaapp.views import UserViewSet, CharityUserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'users', CharityUserViewSet)

urlpatterns = [
    path(r'', include(router.urls)),
    path(r'auth/', include('rest_auth.urls')),
]