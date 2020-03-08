from django.db import models
from datetime import datetime


class Developer(models.Model):
    name = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='photos/%Y/%m/%d/')
    description = models.TextField(blank=True)
    phone = models.CharField(max_length=20)
    email = models.CharField(max_length=50)

    def __str__(self):
        return self.name
