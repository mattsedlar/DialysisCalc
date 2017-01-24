from __future__ import unicode_literals
from django.core.validators import RegexValidator

from django.db import models

# Create your models here.
class Response(models.Model):
  unique_key = models.CharField(null=True,max_length=8)
  position = models.CharField(null=True,max_length=100)
  facility = models.CharField(null=True,max_length=100)
  location = models.CharField(null=True,max_length=100)
  clinic_name = models.CharField(null=True,max_length=100)
  opening = models.IntegerField(default=0)
  mid = models.IntegerField(default=0)
  breaks = models.IntegerField(default=0)
  sick = models.IntegerField(default=0)
  closing = models.IntegerField(default=0)
  name = models.CharField(null=True,max_length=100)
  email = models.CharField(null=True,max_length=100)
  zipcode = models.CharField(max_length=5, default="")
  # phone regex validation
  phone_regex = RegexValidator(regex=r'^[2-9]\d{2}-\d{3}-\d{4}$', message="Phone number must be entered in the format: '999-999-9999'. Up to 10 digits allowed.")
  phone_number = models.CharField(validators=[phone_regex], blank=True, max_length=12) # validators should be a list
  
  def __str__(self):
    return str(self.name) + ": " + str(self.position) + ", " + str(self.facility)
