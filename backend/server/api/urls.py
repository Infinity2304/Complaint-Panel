from django.contrib import admin
from django.urls import path, include
from .views import getComplaint, createComplaint

urlpatterns = [
    path('complaint/', getComplaint, name='get_Complaint' ),
    path('complaint/create/', createComplaint, name='create_Complaint' ),
]