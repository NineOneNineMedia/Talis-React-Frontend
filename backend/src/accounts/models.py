from django.conf import settings
from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=220, null=True, blank=True)
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    location = models.CharField(max_length=220, null=True, blank=True)
    profile_image = models.ImageField(
        upload_to='photos/%Y/%m/%d/', blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.user.username} Profile'
