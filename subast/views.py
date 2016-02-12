from django.shortcuts import render, get_object_or_404

# Create your views here.

from django.core import serializers
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.urls import reverse

from django.core.files.uploadedfile import SimpleUploadedFile

from .models import Company, User

from .forms import CompanyForm


def verify_ruc(request, company_ruc):
	try:
		company = Company.objects.get(ruc = company_ruc)
	except Company.DoesNotExist:
		return JsonResponse({'valid': True})
		
	else:
		return JsonResponse({'valid' : False})

def register_new(request, step):

	context = { 'form': CompanyForm()}

	if( request.method == "POST"):
		if( step == '1' ):
			ruc = request.POST['ruc']
			name = request.POST['name']
			business_name = request.POST['business-name']
			sector = request.POST['sector']
			web_site = request.POST['web-site']
			region = request.POST['region']
			province = request.POST['province']
			distrit = request.POST['distrit']
			address = request.POST['address']

			localization = address + ', ' + distrit + ', ' + province + ', ' + region

			data = {'ruc': ruc,
					'name': name,
					'bussiness_name': business_name,
					'sector': sector,
					'web_site': web_site,
					'localization': localization
			}

			company_form = CompanyForm(data, request.FILES)

			#print( company_form.fields['logo'].value)
			if( company_form.is_valid() ):
				instance = company_form.save(commit = False)
				instance.save()
				request.session['register_company'] = instance.id
				return HttpResponseRedirect( reverse('register_new', args = ('2',) ) )

				
			else:
				print( company_form.errors )
				context = {'form' : company_form}
		elif( step == '2' ):
			return HttpResponseRedirect( reverse('register_new', args = ('3',) ) )

	return render(request, 'subast/step' + step + '.html', context)

def index(request):
	request.session['cheat'] = False
	context = {}
	if( request.method == "POST"):
		email = request.POST['email'];
		user = User.objects.get( email = email )
		company = user.company
		return HttpResponseRedirect( reverse('company_index', args = (company.name,)))

	return render(request, 'subast/index.html', context) 

def company_index(request, company_name):
	company = get_object_or_404(Company, name = company_name)
	if( request.session['cheat'] ):
		context = {'company': company, 'cheat': True}
	else:
		context = {'company': company}

	return render(request, 'subast/index.html', context)

def order_new(request, company_name):
	company = get_object_or_404(Company, name = company_name)
	context = {'company': company}
	return render(request, 'subast/newRequirement.html', context)	

def order_new_unique(request, company_name):

	company = get_object_or_404(Company, name = company_name)

	if( request.method == "POST" ):
		request.session['cheat'] = True;
		return HttpResponseRedirect( reverse('company_index', args = (company.name, ) ) )

	context = {'company': company}
	return render(request, 'subast/uniqueRequirement.html', context)

def order_new_multiple(request, company_name):
	company = get_object_or_404(Company, name = company_name)
	context = {'company': company}
	return render(request, 'subast/multipleRequirement.html', context)

def order_publish(request, company_name):
	company = get_object_or_404(Company, name = company_name)

	try:
		order_name = requirement_name = request.POST['requirement-title']
		quantity = request.POST['requirement-quantity']
		place_region = request.POST['requirement-place-region']
		place_province = request.POST['requirement-place-province']
		place_distrit = request.POST['requirement-place-distrit']
		max_delivery_time = request.POST['requirement-date']
		pay_type = request.POST['pay-type']
		garanty = request.POST['garanty']
		# technical_specification_name = request.POST['technical-specification-name-']
		# print(technical_specification_name)
		# technical_specification_value = request.POST['technical-specification-value-']
		# print(technical_specification_value)
		# comercial_specification_name = request.POST['comercial-specification-name-']
		# print(comercial_specification_name)
		# comercial_specification_value = request.POST['comercial-specification-value-']
		# print(comercial_specification_value)
	except KeyError:
		context = {'company': company}
		return render(request, 	'subast/uniqueRequirement.html', context )
	else:

		return HttpResponseRedirect( reverse('company_index', args = (company.name,) ) )

def companys_json(request):
	data = serializers.serialize("json", Company.objects.all())
	return HttpResponse(data, content_type = 'application/json')


#Cotizaciones

def order_new_cotizacion(request, company_name, order_id):
	company = get_object_or_404(Company, name = company_name)
	context = {'company': company}
	return render(request, 'subast/uniqueCotizacion.html', context)

def coti_new_unique(request, company_name):
	company = get_object_or_404(Company, name = company_name)
	context = {'company': company}
	return render(request, 'subast/uniqueCotizacion.html', context)