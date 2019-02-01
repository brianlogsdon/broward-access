from rest_framework import serializers
from django.db import models

# Create your models here. 
class Contact(models.Model):
    name = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    location_type = models.CharField(max_length=20)
    icon = models.CharField(max_length=100)
    lat = models.DecimalField(max_digits=10, decimal_places=7)
    lng = models.DecimalField(max_digits=10, decimal_places=7)
    

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        exclude = ()