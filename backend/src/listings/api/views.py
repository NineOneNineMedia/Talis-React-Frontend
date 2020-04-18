from rest_framework import viewsets
from listings.models import Listing
from .serializers import ListingSerializer

class ListingViewSet(viewsets.ModelViewSet):
    serializer_class = ListingSerializer
    queryset = Listing.objects.all()