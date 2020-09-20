from django.contrib import admin

from .models import Profile


class ProfileAdmin(admin.ModelAdmin):
    list_per_page = 25


admin.site.register(Profile, ProfileAdmin)
