from django import forms

class ResponseForm(forms.Form):
  POS_OPTIONS = (
  	('Social Worker','Social Worker'),
  	('Patient Care Technician','Patient Care Technician'),
  	('Registered Nurse','Registered Nurse')
  	)
  FAC_OPTIONS = (
    ('DaVita','DaVita'),
    ('Fresenius Medical Care', 'Fresenius Medical Care'),
    ('Other Facility','Other Facility')
    )
  unique_key = forms.CharField(max_length=8)
  position = forms.ChoiceField(widget=forms.Select, choices=POS_OPTIONS, label="I am a ")
  facility = forms.ChoiceField(widget=forms.Select, choices=FAC_OPTIONS, label="and I work at ")
  location = forms.CharField(max_length=100)
  opening = forms.IntegerField()
  breaks = forms.IntegerField()
  sick = forms.IntegerField()
  closing = forms.IntegerField()
  
class ContactForm(forms.Form):
    rid = forms.IntegerField()
    name = forms.CharField(max_length=100)
    email = forms.CharField(max_length=100)
