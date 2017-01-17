from django.shortcuts import render, get_object_or_404
from django.http import HttpResponseRedirect
from .models import Response
from .forms import ResponseForm, ContactForm

# Create your views here.
def index(request):
  return render(request, 'index.html')

def post_response(request):
	form = ResponseForm(request.POST)
	if form.is_valid():
		r = Response(position = form.cleaned_data['position'],
			facility = form.cleaned_data['facility'],
			location = form.cleaned_data['location'],
			opening = form.cleaned_data['opening'],
			breaks = form.cleaned_data['breaks'],
			sick = form.cleaned_data['sick'],
			closing = form.cleaned_data['closing'])
		r.save()
	return HttpResponseRedirect('/action'+'?response_id='+str(r.id))
	
def action(request):
    rid = request.GET.get('response_id')
    query = get_object_or_404(Response,pk=rid)
    return render(request, 'action.html', {'query':query} )
    
def post_contact(request):
    form = ContactForm(request.POST)
    if form.is_valid():
        rid = form.cleaned_data['rid']
        query = get_object_or_404(Response,pk=rid)
        query.name = form.cleaned_data['name']
        query.email = form.cleaned_data['email']
        query.save()
    # This redirect needs to be changed     
    return HttpResponseRedirect('/')
