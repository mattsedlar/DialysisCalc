from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Response(models.Model):
  rid = models.IntegerField(default=0)
  position = models.CharField(max_length=100)
  facility = models.CharField(max_length=100)
  location = models.CharField(max_length=100)
  opening = models.IntegerField(default=0)
  breaks = models.IntegerField(default=0)
  sick = models.IntegerField(default=0)
  closing = models.IntegerField(default=0)
  
  def __str__(self):
    return self.facility
    
class Contact(models.Model):
  # uid = models.IntegerField()
  name = models.CharField(max_length=100)
  email = models.CharField(max_length=100)
  
  def __str__(self):
    return self.name
