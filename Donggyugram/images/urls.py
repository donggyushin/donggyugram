from django.conf.urls import url

from . import views

app_name = "images"

urlpatterns = [
    url(regex=r"^$", view=views.Images.as_view(), name="feed"),
    url(
        regex=r"^(?P<image_id>[0-9]+)/$",
        view=views.ImageDetail.as_view(),
        name="image_detail"

    ),
    url(
        regex=r"^(?P<image_id>[0-9]+)/likes/$",
        view=views.LikeImage.as_view(),
        name="like_image",
    ),
    url(
        regex=r'^(?P<image_id>[0-9]+)/unlikes/$',
        view=views.UnLikeImage.as_view(),
        name='unlike_image'
    ),
    url(
        regex=r'^(?P<image_id>[0-9]+)/comments/(?P<comment_id>[0-9]+)/$',
        view=views.ModerateComment.as_view(),
        name='delete_comment'
    ),
    url(
        regex=r"^(?P<image_id>[0-9]+)/comments/$",
        view=views.commentOnImage.as_view(),
        name="comment_image",
    ),
    url(
        regex=r'^comments/(?P<comment_id>[0-9]+)/$',
        view=views.Comment.as_view(),
        name='comment'
    ),
    url(
        regex=r'^search/$',
        view=views.Search.as_view(),
        name='search'
    ),

]

# 0 create the url and the view
# 1 take the id from url
# 2 we want to find an image with this id
# 3 we want to create a like for that image
