from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Complaint, Admin
from .serializer import ComplaintSerializer, AdminSerializer

# Create your views here.

#Complaint views
@api_view(['GET'])
def getComplaint(request):
    complaint = Complaint.objects.all()
    serializedData = ComplaintSerializer(complaint, many=True).data
    return Response(serializedData, status=status.HTTP_200_OK)

@api_view(['POST'])
def createComplaint(request):
    data = request.data
    serializedData = ComplaintSerializer(data=data)
    if serializedData.is_valid():
        serializedData.save()
        return Response({'message': 'Complaint registered'}, status=status.HTTP_201_CREATED)
    else:
        return Response(serializedData.errors, status=status.HTTP_400_BAD_REQUEST)

#Admin views
@api_view(['POST'])
def signup(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response({'error': 'Please provide username and password.'}, status=status.HTTP_400_BAD_REQUEST)

    if Admin.objects.filter(username=username).exists():
        return Response({'error': 'Admin already exists.'}, status=status.HTTP_400_BAD_REQUEST)

    admin = Admin(username= username, password=password)
    admin.save()
    response = Response({'message': 'Admin created'}, status=status.HTTP_201_CREATED) 
    response.set_cookie('admin_data', admin.id, httponly=True, secure=True, samesite='Strict')
    return response
    

@api_view(['POST'])
def login(request):
    username = request.data.get('username') 
    password = request.data.get('password')

    if not username or not password:
        return Response({'error': 'Please provide username and password.'}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        admin = Admin.objects.get(username=username)
        if admin.password == password :
            response = Response({'message','Admin logged in'}, status=status.HTTP_200_OK) 
            response.set_cookie('admin_data', admin.id, httponly=True, secure=True, samesite='None', path='/')
            return response
        else:
            return Response({'error': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)
    except Admin.DoesNotExist:
        return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET'])
def logout(request):
    response = Response({'message': 'Logout successful.'}, status=status.HTTP_200_OK)
    response.delete_cookie('admin_data')
    return response