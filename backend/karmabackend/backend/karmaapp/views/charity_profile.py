from rest_framework import viewsets

from karmaapp.models import User
from karmaapp.serializers import CharityUserSerializer

from rest_framework.permissions import AllowAny
from karmaapp.permissions import IsLoggedInUserOrAdmin, IsAdminUser


class CharityUserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = CharityUserSerializer

    def get_permissions(self):
        permission_classes = []
        if self.action == 'create':
            permission_classes = [AllowAny]
        elif self.action == 'retrieve' or self.action == 'update' or self.action == 'partial_update':
            permission_classes = [IsLoggedInUserOrAdmin]
        elif self.action == 'list' or self.action == 'destroy':
            permission_classes = [IsAdminUser]
        return [permission() for permission in permission_classes]