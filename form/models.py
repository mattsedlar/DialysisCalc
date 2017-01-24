from __future__ import unicode_literals

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
  
  def __str__(self):
    return str(self.name) + ": " + str(self.position) + ", " + str(self.facility)
