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
  location = forms.CharField(required=False,max_length=100)
  clinic_name = forms.CharField(required=False,max_length=100)
  opening = forms.IntegerField(required=False)
  mid = forms.IntegerField(required=False)
  breaks = forms.IntegerField(required=False)
  sick = forms.IntegerField(required=False)
  closing = forms.IntegerField(required=False)
  # social worker exception
  all_shifts = forms.IntegerField(required=False)
  
class ContactForm(forms.Form):
    rid = forms.IntegerField()
    name = forms.CharField(max_length=100)
    email = forms.CharField(max_length=100)
    zipcode = forms.CharField(required=False,max_length=5)
    phone_number = forms.CharField(required=False,max_length=12)
