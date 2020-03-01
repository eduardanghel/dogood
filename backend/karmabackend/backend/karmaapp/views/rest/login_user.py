from http import HTTPStatus

from rest_framework.response import Response
from rest_framework.views import APIView

from karmaapp.models import User
from karmaapp.serializers.sign_up_flow_serializer import UserLoginSerializer


class LoginUserAPI(APIView):
    authentication_classes = ()
    permission_classes = ()

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data
        user = User.objects.filter(email=data["email"]).first()
        if user is None:
            return Response(
                status=HTTPStatus.BAD_REQUEST, data={"reason": "user doesn't exists"},
            )
        return Response()
