from listings.models import Listing
from .serializers import ListingSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework import filters


class ListingsList(generics.ListAPIView):
    queryset = Listing.objects.all()
    serializer_class = ListingSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['neighborhood', 'price_range', 'bedrooms']
    ordering_fields = ['bedrooms', 'price_range', 'list_date']

    # def get(self, request, format=None):
    #     qs = Listing.objects.order_by('-list_date')
    #     serializer = ListingSerializer(qs, many=True)
    #     return Response(serializer.data)


class ListingDetail(APIView):
    def get_object(self, pk):
        try:
            return Listing.objects.get(pk=pk)
        except Listing.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        Listing = self.get_object(pk)
        serializer = ListingSerializer(Listing)
        return Response(serializer.data)
