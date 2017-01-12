from django import forms

class ResponseForm(forms.Form):
  POS_OPTIONS = (
  	('Social Worker','Social Worker'),
  	('Patient Care Technician','Patient Care Technician'),
  	('Registered Nurse','Registered Nurse')
  	)
  position = forms.MultipleChoiceField(widget=forms.CheckboxSelectMultiple, choices=POS_OPTIONS)
  facility = forms.CharField(max_length=100)
  location = forms.CharField(max_length=100)
#  opening = forms.IntegerField()
#  breaks = forms.IntegerField()
#  sick = forms.IntegerField()
#  closing = forms.IntegerField()