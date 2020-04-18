from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='listings'),
    path('<int:listing_id>', views.listing, name='listing'),
    path('<int:listing_id>/favorite_listing/',
         views.favorite_listing, name='favorite_listing'),
    path('search', views.search, name='search'),
]
