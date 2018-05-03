from django.contrib import admin
from . import models

# Register your models here.

@admin.register(models.Notification)
class NotificationAdim(admin.ModelAdmin):

    list_display = (
        'id',
        'creator',
        'to',
        'notification_type',
        
    )