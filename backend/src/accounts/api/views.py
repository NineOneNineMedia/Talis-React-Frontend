from accounts.models import Profile
from .serializers import ProfileSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework import filters


class ProfilesList(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    """ search_fields = ['neighborhood', 'price_range', 'bedrooms']
    ordering_fields = ['bedrooms', 'price_range', 'list_date'] """


class ProfileDetail(APIView):
    def get_object(self, user):
        try:
            return Profile.objects.get(user=user)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        Profile = self.get_object(pk)
        serializer = ProfileSerializer(Profile)
        return Response(serializer.data)
