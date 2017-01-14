from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Response
from .forms import ResponseForm

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
	return HttpResponseRedirect('/action' + '?id=' + str(r.id))
	
def action(request):
	return render(request, 'action.html')
