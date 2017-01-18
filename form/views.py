from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from django.utils.crypto import get_random_string
from .models import Response
from .forms import ResponseForm, ContactForm

# Create your views here.
def index(request):
  unique_key = get_random_string(length=8)
  return render(request, 'index.html', {'unique_key': unique_key } )

def post_response(request):
	form = ResponseForm(request.POST)
	if form.is_valid():
		r = Response(unique_key = form.cleaned_data['unique_key'],
		    position = form.cleaned_data['position'],
			facility = form.cleaned_data['facility'],
			location = form.cleaned_data['location'],
			opening = form.cleaned_data['opening'],
			breaks = form.cleaned_data['breaks'],
			sick = form.cleaned_data['sick'],
			closing = form.cleaned_data['closing'])
		r.save()
	return HttpResponseRedirect('/action'+'?response_id='+ str(r.id) +
	                            '&key=' + r.unique_key)
	
def action(request):
    rid = request.GET.get('response_id')
    key = request.GET.get('key')
    query = get_object_or_404(Response,pk=rid)
    
    # security layer
    if key == query.unique_key:
      
      if query.position == 'Social Worker':
        ratios = 75
      elif query.position == 'Patient Care Technician':
        ratios = 3
      else:
        ratios = 8
        
      return render(request, 'action.html', {'query':query, 'ratios': ratios } )
    
    else:
        return render(request, '404.html')
        
def error(request):
    return render(request, '404.html')
    
def post_contact(request):
    form = ContactForm(request.POST)
    if form.is_valid():
        rid = form.cleaned_data['rid']
        query = get_object_or_404(Response,pk=rid)
        query.name = form.cleaned_data['name']
        query.email = form.cleaned_data['email']
        query.save()
    # This redirect needs to be changed
    return HttpResponseRedirect('http://morethannumbers.org')
