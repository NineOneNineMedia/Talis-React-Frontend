from algoliasearch_django import AlgoliaIndex
from algoliasearch_django.decorators import register

from .models import Listing


@register(Listing)
class ListingModelIndex(AlgoliaIndex):
    fields = ('neighborhood', 'title', 'property_address', 'property_type')
    geo_field = 'location'
    settings = {
        'searchableAttributes': ['neighborhood'],
        'attributesForFaceting': [
            'property_type',
        ],
        'queryType': 'prefixAll',
        'hitsPerPage': 5,
    }
    index_name = 'test_LISTING'
