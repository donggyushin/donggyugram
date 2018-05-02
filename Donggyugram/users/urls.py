from django.conf.urls import url
from django.db import models



from . import views

app_name = "users"
urlpatterns = [
    url(regex=r"^explore$", view=views.ExploreUsers.as_view(), name="explore_users"),
]
