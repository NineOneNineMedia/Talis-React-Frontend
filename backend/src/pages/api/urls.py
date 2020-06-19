from rest_framework.urlpatterns import format_suffix_patterns
from .views import HomeView
from django.urls import path

urlpatterns = [
    path('', HomeView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)