from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Complaint
from .serializer import ComplaintSerializer

# Create your views here.

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
