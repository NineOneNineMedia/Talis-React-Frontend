from listings.models import Listing
from listings.api.serializers import ListingSerializer
from rest_framework import generics

class HomeView(generics.ListCreateAPIView):
    queryset = Listing.objects.order_by(
        '-list_date').filter(is_published=True)[:4]
    serializer_class = ListingSerializer