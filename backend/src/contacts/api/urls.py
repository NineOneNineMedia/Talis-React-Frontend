from rest_framework.routers import DefaultRouter
from contacts.api.views import ContactViewSet
from django.urls import path

router = DefaultRouter()
router.register('', ContactViewSet, basename='contacts')
urlpatterns = router.urls