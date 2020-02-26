from django.urls import path, include
from rest_framework import routers
from karmaapp.views import UserViewSet

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    #other paths
    path(r'', include(router.urls)),
    path(r'auth/', include('rest_auth.urls')),
]