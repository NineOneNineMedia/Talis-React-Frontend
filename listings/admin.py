from django.contrib import admin

from .models import Listing
from django_google_maps import widgets as map_widgets
from django_google_maps import fields as map_fields


class ListingAdmin(admin.ModelAdmin):
    # list_display = ('id', 'title', 'is_published',
    #                 'price', 'list_date', 'realtor')
    # list_display_links = ('id', 'title')
    # list_filter = ('realtor',)
    # list_editable = ('is_published',)
    # search_fields = ('title', 'description', 'address',
    #                  'neighborhood', 'price')
    # list_per_page = 25

    formfield_overrides = {
        map_fields.AddressField: {
            'widget': map_widgets.GoogleMapsAddressWidget(attrs={'data-map-type': 'roadmap'})},
    }


admin.site.register(Listing, ListingAdmin)
