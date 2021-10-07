from django.urls import path
from . import views

app_name = 'trackerapp'
urlpatterns = [
    path('', views.home_page, name='home'),
    path('stats/', views.stats_page, name='stats'),
]