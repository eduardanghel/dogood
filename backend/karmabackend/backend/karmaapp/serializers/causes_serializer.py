from rest_framework import serializers

from karmaapp.models.cause import Cause


class CauseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cause
        fields = '__all__'


class CauseWriteSerializer(serializers.HyperlinkedModelSerializer):

    def create(self, validated_data):
        cause = Cause(**validated_data)

        return cause

    def update(self, instance, validated_data):
        cause_data = validated_data.pop('cause')
        cause = instance.cause
        cause.name = cause_data.get('name', cause.name)
        cause.logo = cause_data.get('logo', cause.logo)
        cause.save()

        return instance
