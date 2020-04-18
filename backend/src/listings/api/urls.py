from rest_framework.routers import DefaultRouter
from listings.api.views import ListingViewSet
from django.urls import path

router = DefaultRouter()
router.register('', ListingViewSet, basename='listings')
urlpatterns = router.urls