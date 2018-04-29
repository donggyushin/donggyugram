from django.conf.urls import url

from . import views

app_name = "images"

urlpatterns = [
    url(
        regex=r"^all/$",
        view=views.ListAllImages.as_view(),
        name='all_images',
    ),
    url(
        regex=r"^comments/$",
        view=views.ListAllComment.as_view(),
        name='all_comments',
    ),
    url(
        regex=r"^likes/$",
        view=views.ListAllLike.as_view(),
        name='all_likes',
    ),
]
