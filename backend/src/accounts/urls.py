from django.urls import path

from . import views

urlpatterns = [
    path('', views.GoogleLogin.as_view(), name='google_login')
    # path('login', views.login, name='login'),
    # path('register', views.register, name='register'),
    # path('logout', views.logout, name='logout'),
    # path('dashboard', views.dashboard, name='dashboard'),
]
