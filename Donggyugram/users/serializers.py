from rest_framework import serializers
from . import models
from Donggyugram.images import serializers as image_serializers


class ListUserSerializer(serializers.ModelSerializer):

    class Meta:

        model = models.User
        fields = (
            'id',
            'name',
            'username',
            'profile_image',
        )


class UserProfileSerializer(serializers.ModelSerializer):

    images = image_serializers.CountImageSerializer(many=True, read_only=True)
    post_count = serializers.ReadOnlyField()
    followers_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()

    class Meta:

        model = models.User
        fields = (
            'profile_image',
            'id',
            'name',
            'username',
            'website',
            'bio',
            'post_count',
            'followers_count',
            'following_count',
            'images'
        )
