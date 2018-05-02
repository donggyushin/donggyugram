from rest_framework import serializers
from . import models 
from Donggyugram.images import serializers as image_serializers

class ExploreUserSerializer(serializers.ModelSerializer):
    

    class Meta:

        model = models.User
        fields = (
            'id',
            'name',
            'username',
            'profile_image',
        )


class UserProfileSerializer(serializers.ModelSerializer):
    
    images = image_serializers.UserProfileImageSerializer(many = True)

    class Meta:

        model = models.User
        fields = (
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