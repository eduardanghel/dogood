from django.utils import timezone
from rest_framework import serializers

from karmaapp.models import UserProfile


class UserProfileSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(write_only=False)

    class Meta:
        model = UserProfile
        fields = (
            "id",
            "dob",
            "gender",
            "address",
            "city",
            "postcode",
            "telephone",
            "terms_consent",
        )
        extra_kwargs = {
            "id": {"required": False},
            "dob": {"required": False},
            "gender": {"required": False},
            "address": {"required": False},
            "city": {"required": False},
            "postcode": {"required": False},
            "telephone": {"required": False},
        }


class UserProfileWriteSerializer(UserProfileSerializer):
    terms_consent = serializers.BooleanField()

    class Meta:
        model = UserProfile
        fields = (
            "id",
            "dob",
            "gender",
            "address",
            "city",
            "postcode",
            "telephone",
            "terms_consent",
        )
        extra_kwargs = {
            "id": {"required": False},
            "dob": {"required": False},
            "gender": {"required": False},
            "address": {"required": False},
            "city": {"required": False},
            "postcode": {"required": False},
            "telephone": {"required": False},
        }

    def create(self, validated_data):


        user = self.context["user"]
        user.user_profile, created = UserProfile.objects.get_or_create(user=user)
        user.user_profile = self._update_userprofile(user.user_profile, validated_data)
        user.save()
        return user.user_profile

    def update(self, userprofile, validated_data):
        user_profile = self._update_userprofile(userprofile, validated_data)
        user_profile.save()
        return user_profile

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
