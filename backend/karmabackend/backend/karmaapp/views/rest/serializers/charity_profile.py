from django.utils import timezone
from rest_framework import serializers

from karmaapp.models import CharityProfile


class CharityProfileSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(write_only=False)

    class Meta:
        model = CharityProfile
        fields = (
            "id",
            "date_of_registration",
            "type",
            "charity_number",
            "exemption",
            "logo",
            "terms_consent",
        )
        extra_kwargs = {
            "id": {"required": False},
            "date_of_registration": {"required": False},
            "type": {"required": False},
            "charity_number": {"required": False},
            "exemption": {"required": False},
            "logo": {"required": False},
        }


class CharityProfileWriteSerializer(CharityProfileSerializer):
    terms_consent = serializers.BooleanField()

    class Meta:
        model = CharityProfile
        fields = (
            "id",
            "date_of_registration",
            "type",
            "charity_number",
            "exemption",
            "logo",
            "terms_consent",
        )
        extra_kwargs = {
            "id": {"required": False},
            "date_of_registration": {"required": False},
            "type": {"required": False},
            "charity_number": {"required": False},
            "exemption": {"required": False},
            "logo": {"required": False},
        }

    def create(self, validated_data):
        user = self.context["user"]
        user.userprofile, created = CharityProfile.objects.get_or_create(user=user)
        user.userprofile = self._update_userprofile(user.userprofile, validated_data)
        user.save()
        return user.userprofile

    def update(self, userprofile, validated_data):
        userprofile = self._update_userprofile(userprofile, validated_data)
        userprofile.save()
        return userprofile

    def _update_userprofile(self, userprofile, validated_data):
        if validated_data.get("terms_consent", None) is not None:
            userprofile.terms_consent_datetime = timezone.now()
            userprofile.terms_consent = validated_data.get("terms_consent", None)

        if validated_data.get("dob", "") != "":
            userprofile.dob = validated_data.get(
                "dob", ""
            )

        if validated_data.get("gender", "") != "":
            userprofile.gender = validated_data.get(
                "gender", ""
            )
            if validated_data.get("address", "") != "":
                userprofile.address = validated_data.get(
                    "address", ""
                )

        if validated_data.get("city", "") != "":
            userprofile.city = validated_data.get(
                "city", ""
            )

        if validated_data.get("postcode", "") != "":
            userprofile.postcode = validated_data.get(
                "postcode", ""
            )

        if validated_data.get("telephone", "") != "":
            userprofile.telephone = validated_data.get(
                "telephone", ""
            )

        if validated_data.get("postcode", "") != "":
            userprofile.postcode = validated_data.get(
                "postcode", ""
            )

        userprofile.user.save()

        return userprofile
