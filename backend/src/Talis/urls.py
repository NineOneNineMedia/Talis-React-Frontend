from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', include('pages.urls')),
    path('listings/', include('listings.urls')),
    path('admin/', admin.site.urls),
    path('contacts/', include('contacts.urls')),
    path('accounts/', include('accounts.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('api-listings/', include('listings.api.urls')),
    path('api-contacts/', include('contacts.api.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
