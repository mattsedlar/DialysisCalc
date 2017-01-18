from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'post_response/$', views.post_response, name="post_response"),
    url(r'^action?.*$', views.action),
    url(r'^404$', views.error),
    url(r'post_contact/$', views.post_contact, name="post_contact")    
]
