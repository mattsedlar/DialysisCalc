from django.shortcuts import render
from django.http import HttpResponseRedirect
from .models import Response
from .forms import ResponseForm

# Create your views here.
def index(request):
	form = ResponseForm()
	return render(request, 'index.html', {'form':form})

def post_response(request):
	form = ResponseForm(request.POST)
	if form.is_valid():
		r = Response(position = form.cleaned_data['position'],
			facility = form.cleaned_data['facility'],
			location = form.cleaned_data['location'])
		r.save()
	return HttpResponseRedirect('/action')
	
def action(request):
	return render(request, 'action.html')
