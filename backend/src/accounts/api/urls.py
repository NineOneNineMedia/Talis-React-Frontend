from rest_framework.urlpatterns import format_suffix_patterns
from .views import ProfilesList, ProfileDetail
from django.urls import path

urlpatterns = [
    path('', ProfilesList.as_view()),
    path('profile/<int:pk>', ProfileDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
