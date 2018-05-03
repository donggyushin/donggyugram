from django.db import models
from Donggyugram.users import models as users_models
from Donggyugram.images import models as images_models





# Create your models here.


class Notification(images_models.TimeStampedModel):
    
    TYPE_CHOICES = (
        ('like', 'Like'),
        ('comment', 'Comment'),
        ('follow', 'Follow')
    )
    
    creator = models.ForeignKey(users_models.User, related_name='creator', on_delete=models.CASCADE)
    to = models.ForeignKey(users_models.User, related_name='to', on_delete=models.CASCADE)
    image = models.ForeignKey(images_models.Image, related_name='image', on_delete=models.CASCADE, null=True, blank=True)
    notification_type = models.CharField(max_length = 20, choices=TYPE_CHOICES)


