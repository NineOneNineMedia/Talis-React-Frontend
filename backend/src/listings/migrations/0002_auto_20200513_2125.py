# Generated by Django 3.0.5 on 2020-05-13 21:25

from django.db import migrations
import django_google_maps.fields


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='listing',
            name='geolocation',
            field=django_google_maps.fields.GeoLocationField(blank=True, max_length=100),
        ),
    ]
