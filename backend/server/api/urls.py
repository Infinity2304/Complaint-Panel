from django.contrib import admin
from django.urls import path, include
from .views import getComplaint, createComplaint, updateComplaintStatus, deleteComplaint, signup, login, logout

urlpatterns = [
    path('complaint/', getComplaint, name='get_Complaint' ),
    path('complaint/create/', createComplaint, name='create_Complaint' ),
    path('complaint/update/<int:pk>', updateComplaintStatus, name='update_Complaint_status' ),
    path('complaint/delete/<int:pk>', deleteComplaint, name='delete_Complaint' ),

    path('admin/signup', signup, name='admin_signup'),
    path('admin/login', login, name='admin_login'),
    path('admin/logout', logout, name='admin_logout'),
]