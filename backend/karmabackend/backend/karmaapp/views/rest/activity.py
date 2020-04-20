from django.shortcuts import get_object_or_404
from oauth2_provider.contrib.rest_framework import OAuth2Authentication
from rest_framework.response import Response
from rest_framework.views import APIView

from karmaapp import authentication
from karmaapp.models import Activity
from karmaapp.serializers.activity_serializer import ActivitySerializer


class ActivityAPI(APIView):
    authentication_classes = [
        authentication.ExpiringTokenAuthentication,
        OAuth2Authentication,
    ]

    def get(self, request, activity_id=None):
        """
            Get all activities as a list or a specific activity
        """
        if activity_id is None:
            return self.get_all(request)
        else:
            return self.retrieve(request, activity_id)

    def get_all(self, request):
        """
            Returns all activities

        """
        activities = Activity.objects.all()

        for activity in activities:
            activities_values = activity.values(
                "name", "charity", "causes_type",
                "date", "time", "number_spots",
                "address", "activity_description",
                "email", "telephone", "photo",
                "age_check", "photo_check",
                "physical_activity_check",
                "additional_info_check"
            )
            activity_list = [
                ActivitySerializer(activities).data
                for activity in activities_values
            ]

        return Response(activity_list)

    def retrieve(self, request, activity_id):
        activity = get_object_or_404(
            Activity, id=activity_id
        )
        activity_serializer = ActivitySerializer(activity)
        detailed_data = activity_serializer.data
        return Response(detailed_data)
