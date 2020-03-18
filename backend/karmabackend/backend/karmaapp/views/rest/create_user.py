import logging
from http import HTTPStatus

from django.db import transaction
from django.utils.decorators import method_decorator
from rest_framework.response import Response
from rest_framework.views import APIView

from karmaapp.models import User
from karmaapp.serializers.sign_up_flow_serializer import UserSerializer
from karmaapp.views.rest.serializers.user_profile import UserProfileWriteSerializer

logger = logging.getLogger(__name__)


@method_decorator(transaction.non_atomic_requests, "dispatch")
class CreateUserAPI(APIView):
    authentication_classes = ()
    permission_classes = ()

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        with transaction.atomic():
            if User.objects.filter(email__iexact=data["email"]).count() != 0:
                return Response(
                    status=HTTPStatus.BAD_REQUEST,
                    data={"reason": "user already exists"},
                )
            if "password" in data.keys():
                user = User.objects.create_user(
                    password=data["password"],
                    first_name=data["first_name"],
                    last_name=data["last_name"],
                    username=data["email"].lower(),
                    email=data["email"].lower(),
                )
            else:
                user = User.objects.create_user(
                    first_name=data["first_name"],
                    last_name=data["last_name"],
                    username=data["email"].lower(),
                    email=data["email"].lower(),
                )
            serializer = UserProfileWriteSerializer(
                user.user_profile, data=data, partial=True
            )
            serializer.is_valid(raise_exception=True)
            serializer.save()
            data = {
                'user': user.id,
                'user_profile': user.user_profile.id
            }

        return Response(data=data, status=HTTPStatus.CREATED)
