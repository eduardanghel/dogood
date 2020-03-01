from django.shortcuts import get_object_or_404
from oauth2_provider.contrib.rest_framework import OAuth2Authentication
from rest_framework.response import Response
from rest_framework.views import APIView

from karmaapp import authentication
from karmaapp.models import Cause
from karmaapp.serializers.causes_serializer import CauseSerializer


class CausesAPI(APIView):
    authentication_classes = [
        authentication.ExpiringTokenAuthentication,
        OAuth2Authentication,
    ]

    def get(self, request, cause_id=None):
        """
            Get all causes as a list or a specific cause
        """
        if cause_id is None:
            return self.get_all(request)
        else:
            return self.retrieve(request, cause_id)

    def post(self, request):
        """
            Add a new cause
        """

        if "name" in request.data:
            if "logo" in request.data:
                cause = Cause.objects.create(
                    name=request.data["name"],
                    logo=request.data["logo"],
                )
                return_data = self.get(request, cause.id)
                return Response(data=return_data.data, status=201)
        else:
            return Response(data=None, status=400)

    def patch(self, request, cause_id):
        """
           Edit a cause
        """
        cause = get_object_or_404(Cause, id=cause_id)
        updated = False
        if "name" in request.data:
            cause.name = request.data[
                "name"
            ]
            updated = True
        if "logo" in request.data:
            cause.logo = request.data["logo"]
            updated = True

        if updated:
            cause.save(
                update_fields=["logo", "name"]
            )
            return_data = self.get(request, cause.id)
            return Response(data=return_data.data)
        else:
            return Response(data=None, status=400)

    def get_all(self, request):
        """
            Returns all the causes

        """
        causes = Cause.objects.all()

        for cause in causes:
            cause_values = cause.values(
                "name", "logo"
            )
            cause_list = [
                CauseSerializer(causes).data
                for causes in cause_values
            ]

        return Response(cause_list)

    def retrieve(self, request, cause_id):
        cause = get_object_or_404(
            Cause, id=cause_id
        )
        cause_serializer = CauseSerializer(cause)
        detailed_data = cause_serializer.data
        return Response(detailed_data)
