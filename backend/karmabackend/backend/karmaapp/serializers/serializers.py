import rest_auth.serializers


class LoginSerializer(rest_auth.serializers.LoginSerializer):
    def create(self, validated_data):
        pass

    def update(self, instance, validated_data):
        pass

    def validate(self, attrs):
        attrs["email"] = attrs.get("email").lower()
        attrs["username"] = attrs.get("username").lower()
        return super().validate(attrs)
