from rest_framework.urlpatterns import format_suffix_patterns
from .views import ListingsList, ListingDetail
from django.urls import path

urlpatterns = [
    path('', ListingsList.as_view()),
    path('listing/<int:pk>', ListingDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)