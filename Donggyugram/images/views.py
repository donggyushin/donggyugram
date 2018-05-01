from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from . import models, serializers
from rest_framework import status



# Create your views here.

class Feed(APIView):

    def get(self, request, format=None):
        
        user = request.user
        
        following_users = user.following.all() 

        image_list = []

        for following_user in following_users:
            
            user_images =  following_user.images.all()[:2]

            for image in user_images:
                
                image_list.append(image)

        sorted_list = sorted(image_list, key = get_key, reverse=True)

        print(sorted_list)

        serializer = serializers.ImageSerializer(sorted_list, many = True)

        return Response(serializer.data)

def get_key(image):
    return image.created_at



class LikeImage(APIView):

    def post(self, request,image_id ,format = None):
        
        user = request.user

        try:
          found_image = models.Image.objects.get(id = image_id)
        except models.Image.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        try:
            preexisting_like = models.Like.objects.get(
                creator = user,
                image = found_image,
            )
            preexisting_like.delete()

            

            return Response(status=status.HTTP_204_NO_CONTENT)
        except models.Like.DoesNotExist:

            new_like = models.Like.objects.create(
                creator = user,
                image = found_image
            )

            new_like.save()

            return Response(status = status.HTTP_201_CREATED)

class commentOnImage(APIView):

    def post(self, request, image_id, format=None):
        
        user = request.user 

        serializer = serializers.CommentSerializer(data=request.data)

        try:
            found_image = models.Image.objects.get(id=image_id)
        except models.Image.DoesNotExist:
            return Response(status = status.HTTP_404_NOT_FOUND)


        if serializer.is_valid():
            
            serializer.save(creator=user, image=found_image)
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        else:
            
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)



