from django.shortcuts import render
from .forms import ResponseForm

# Create your views here.
def index(request):
	form = ResponseForm()
	return render(request, 'index.html')

def post_response(request):
	form = ResponseForm(request.POST)
	if form.is_valid():
		response = Response(position = form.cleaned_data['position'],
			facility = form.cleaned_data['facility'],
			location = form.cleaned_data['location'])
		response.save()
	return HttpResponseRedirect('/action')
