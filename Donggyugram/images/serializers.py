from rest_framework import serializers
from . import models
from Donggyugram.users import models as user_models
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)


class SmallImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        fields = (
            'file',
        )


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


class ImageSerializer(TaggitSerializer, serializers.ModelSerializer):

    comments = CommentSerializer(many=True)
    creator = FeedUserSerializer()
    tags = TagListSerializerField()
    is_liked = serializers.SerializerMethodField()

    class Meta:
        model = models.Image
        fields = (
            "id",
            "natural_time",
            "updated_at",
            "file",
            "location",
            "caption",
            'like_count',
            'comments',
            'tags',
            "creator",
            "is_liked"
        )

    def get_is_liked(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            try:
                models.Like.objects.get(
                    creator__id=request.user.id,
                    image__id=obj.id
                )
                return True
            except models.Like.DoesNotExist:
                return False
        return False


class CountImageSerializer(serializers.ModelSerializer):

    class Meta:

        model = models.Image
        fields = (
            'id',
            'file',
            'comment_count',
            'like_count'
        )


class InputImageSerializer(serializers.ModelSerializer):

    class Meta:

        model = models.Image
        fields = (
            'file',
            'location',
            'caption',
        )
