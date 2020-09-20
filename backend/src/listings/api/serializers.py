from rest_framework import serializers
from drf_extra_fields.fields import IntegerRangeField


from listings.models import Listing


class RangeSerializer(serializers.Serializer):
    ranges = IntegerRangeField()


serializer = RangeSerializer(data={'ranges': {'lower': 0, 'upper': 1}})


class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = '__all__'
