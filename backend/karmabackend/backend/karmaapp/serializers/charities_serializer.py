from rest_framework import serializers

from karmaapp.models.user import CharityProfile
from karmaapp.models.user import User


class CharityProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CharityProfile
        fields = ('date_of_registration', 'type', 'charity_number', 'exemption', 'logo',)


class CharityUserSerializer(serializers.ModelSerializer):
    profile = CharityProfileSerializer(required=True)

    class Meta:
        model = User
        fields = ('url', 'email', 'first_name', 'last_name', 'password', 'profile')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        CharityProfile.objects.create(user=user, **profile_data)
        return user

    def update(self, instance, validated_data):
        profile_data = validated_data.pop('profile')
        profile = instance.profile

        instance.email = validated_data.get('email', instance.email)
        instance.save()

        profile.date_of_registration = profile_data.get('date_of_registration', profile.date_of_registration)
        profile.type = profile_data.get('type', profile.type)
        profile.charity_number = profile_data.get('charity_number', profile.charity_number)
        profile.exemption = profile_data.get('exemption', profile.exemption)
        profile.logo = profile_data.get('logo', profile.logo)

        profile.save()

        return instance
