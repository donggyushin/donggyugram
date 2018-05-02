from rest_framework import serializers
from . import models
from Donggyugram.users import models as user_models


class FeedUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = user_models.User
        fields = (
            'id',
            'username',
            'profile_image'
        )


class CommentSerializer(serializers.ModelSerializer):

    creator = FeedUserSerializer(read_only=True)

    class Meta:
        model = models.Comment
        fields = (
            'id',
            'message',
            'creator',
            'image',
        )


class LikeSerializer(serializers.ModelSerializer):


    class Meta:
        model = models.Like
        fields = '__all__'




class ImageSerializer(serializers.ModelSerializer):
    
    comments = CommentSerializer(many = True)
    creator = FeedUserSerializer()

    class Meta:
        model = models.Image
        fields = (
            "id",
            "created_at",
            "updated_at",
            "file",
            "location",
            "caption",
            'like_count',
            'comments',
            "creator",
        )

