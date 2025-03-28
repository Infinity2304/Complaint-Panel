from django.db import models

# Create your models here.

class Complaint(models.Model):
    name = models.CharField(max_length=20)
    roll=models.CharField(max_length=10)
    course = models.CharField(max_length=20)
    description = models.TextField()
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.pk