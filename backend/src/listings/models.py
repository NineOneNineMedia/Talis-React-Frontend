from django.db import models
from datetime import datetime
from developers.models import Developer
from django.contrib.auth.models import User
from django.urls import reverse
from django.contrib.postgres.fields import IntegerRangeField
from psycopg2.extras import NumericRange
from multiselectfield import MultiSelectField
from django_google_maps import fields as map_fields


class Listing(models.Model):

    LEASE_LENGTH = (
        ('Flexible', 'Flexible'),
        ('Long Lets', 'Long Lets'),
        ('Short Lets', 'Short Lets'),
    )

    SECURITY = (
        ('24/7 Onsite Security', '24/7 Onsite Security'),
    )

    PARKING = (
        ('Ground Floor Premise Parking', 'Ground Floor Premise Parking'),
        ('Underground Parking', 'Underground Parking'),
    )

    SERVICE = (
        ('Paint', 'Paint'),
        ('HVAC', 'HVAC'),
    )

    FEATURES = (
        ('Wifi', 'Wifi'),
        ('Coffee Shop', 'Coffee Shop'),
        ('Restaurant', 'Restaurant'),
        ('Bar', 'Bar'),
    )

    FITNESS_RECREATION = (
        ('Pool', 'Pool'),
        ('Gym', 'Gym'),
        ('Tennis Courts', 'Tennis Courts'),
        ('Game Room', 'Game Room'),
    )

    developer = models.ForeignKey(
        Developer, on_delete=models.DO_NOTHING, null=True)
    title = models.CharField(max_length=200)
    property_address = models.CharField(max_length=200, blank=True, default='')
    neighborhood = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    price_range = IntegerRangeField(blank=True, null=True)
    bedrooms = IntegerRangeField(blank=True, null=True)
    bathrooms = models.DecimalField(max_digits=2, decimal_places=1)
    garage = models.IntegerField(default=0)
    one_bedroom_price = IntegerRangeField(blank=True, null=True)
    two_bedroom_price = IntegerRangeField(blank=True, null=True)
    three_bedroom_price = IntegerRangeField(blank=True, null=True)
    four_bedroom_price = IntegerRangeField(blank=True, null=True)
    five_bedroom_price = IntegerRangeField(blank=True, null=True)
    lease_length = MultiSelectField(
        choices=LEASE_LENGTH, max_choices=3, blank=True, default='', null=True)
    security = MultiSelectField(
        choices=SECURITY, max_choices=1, blank=True, default='', null=True)
    parking = MultiSelectField(
        choices=PARKING, max_choices=2, blank=True, default='', null=True)
    service = MultiSelectField(
        choices=SERVICE, max_choices=2, blank=True, default='', null=True)
    features = MultiSelectField(
        choices=FEATURES, max_choices=4, blank=True, default='', null=True)
    fitness_recreation = MultiSelectField(
        choices=FITNESS_RECREATION, max_choices=4, blank=True, default='', null=True)
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/')
    photo_1 = models.ImageField(
        upload_to='photos/%Y/%m/%d/', blank=True, null=True)
    photo_2 = models.ImageField(
        upload_to='photos/%Y/%m/%d/', blank=True, null=True)
    photo_3 = models.ImageField(
        upload_to='photos/%Y/%m/%d/', blank=True, null=True)
    photo_4 = models.ImageField(
        upload_to='photos/%Y/%m/%d/', blank=True, null=True)
    photo_5 = models.ImageField(
        upload_to='photos/%Y/%m/%d/', blank=True, null=True)
    photo_6 = models.ImageField(
        upload_to='photos/%Y/%m/%d/', blank=True, null=True)
    is_published = models.BooleanField(default=True)
    list_date = models.DateTimeField(default=datetime.now, blank=True)
    favorite = models.ManyToManyField(
        User, related_name='favorite', blank=True)
    address = map_fields.AddressField(max_length=200)
    geolocation = map_fields.GeoLocationField(max_length=100)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('listing', kwargs={'listing_id': self.id})
