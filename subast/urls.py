from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.index, name = 'index'),
	url(r'^(?P<company_name>[a-z]+)/$', views.company_index, name = 'company_index'),
	url(r'^(?P<company_name>[a-z]+)/order/new$', views.order_new, name = 'order_new'),
	url(r'^(?P<company_name>[a-z]+)/order/new/unique$', views.order_new_unique, name = 'order_new_unique'),
	url(r'^(?P<company_name>[a-z]+)/order/new/multiple$', views.order_new_multiple, name = 'order_new_multiple'),
	url(r'^(?P<company_name>[a-z]+)/order/publish$', views.order_new_multiple, name = 'order_publish'),
	url(r'^companys_json/$', views.companys_json, name = 'companys_json'),

	#Cotizaciones
	url(r'^(?P<company_name>[a-z]+)/coti/new/unique$', views.coti_new_unique, name = 'coti_new_unique'),
]