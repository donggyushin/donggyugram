from rest_framework import serializers
from . import models


class CommentSerializer(serializers.ModelSerializer):


    class Meta:
        model = models.Comment
        fields = '__all__'


class LikeSerializer(serializers.ModelSerializer):


    class Meta:
        model = models.Like
        fields = '__all__'


class ImageSerializer(serializers.ModelSerializer):
    
    likes = LikeSerializer(many = True)
    comments = CommentSerializer(many = True)

    class Meta:
        model = models.Image
        fields = (
            "id",
            "created_at",
            "updated_at",
            "file",
            "location",
            "caption",
            'likes',
            'comments',
            "creator",
        )

