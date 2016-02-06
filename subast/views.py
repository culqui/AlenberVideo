from django.shortcuts import render, get_object_or_404

# Create your views here.

from .models import Company
from django.core import serializers
from django.http import JsonResponse
from django.http import HttpResponse

def index(request):
	context = {}
	return render(request, 'subast/index.html', context) 

def company_index(request, company_name):
	company = get_object_or_404(Company, name = company_name)
	context = {'company': company}
	return render(request, 'subast/index.html', context)

def order_new(request, company_name):
	company = get_object_or_404(Company, name = company_name)
	context = {'company': company}
	return render(request, 'subast/newRequirement.html', context)	

def order_new_unique(request, company_name):
	company = get_object_or_404(Company, name = company_name)
	context = {'company': company}
	return render(request, 'subast/uniqueRequirement.html', context)

def order_new_multiple(request, company_name):
	company = get_object_or_404(Company, name = company_name)
	context = {'company': company}
	return render(request, 'subast/multipleRequirement.html', context)

def companys_json(request):
	data = serializers.serialize("json", Company.objects.all())
	return HttpResponse(data, content_type = 'application/json')