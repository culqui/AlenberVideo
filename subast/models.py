from django.db import models

# Create your models here.

class Company(models.Model):
	logo = models.ImageField(upload_to = 'companyLogo/', null = True, max_length = 200)
	ruc = models.CharField(max_length = 12, unique=True)
	name = models.CharField(max_length = 50, unique=True)
	bussiness_name = models.CharField(max_length = 50)
	localization = models.CharField(max_length = 200)
	sector = models.CharField(max_length = 50)
	web_site = models.URLField()
	isBuyer = models.BooleanField(default = False)
	isSupplier = models.BooleanField(default = False)
	active = models.BooleanField(default = False)

	def __str__(self):
		return self.bussiness_name

class Category(models.Model):
	company = models.ForeignKey(Company, on_delete = models.CASCADE)
	name = models.CharField(max_length = 50)
	description = models.CharField(max_length = 200, blank = True)

	def __str__(self):
		return self.name

class Product(models.Model):
	category = models.ForeignKey(Category, on_delete = models.CASCADE)
	name = models.CharField(max_length = 50)
	description = models.CharField(max_length = 200, blank = True)
	image = models.ImageField(null = True, max_length = 200)

	def __str__(self):
		return self.name

class Rol(models.Model):
	name = models.CharField(max_length = 50)
	description = models.CharField(max_length = 200)

	def __str__(self):
		return self.name

class User(models.Model):
	company = models.ForeignKey(Company, on_delete = models.CASCADE)
	rol = models.ForeignKey(Rol, on_delete = models.CASCADE)
	email = models.EmailField()

	def __str__(self):
		return self.email

class PublishOrder(models.Model):
	user = models.ForeignKey(User, on_delete = models.CASCADE)
	publish_date = models.DateField(auto_now_add = True)

class Order(models.Model):
	event = models.ForeignKey(PublishOrder, on_delete = models.CASCADE)
	name = models.CharField(max_length = 50)
	delivery_place = models.CharField(max_length = 200)
	max_delivery_time = models.DateField()
	isUrgent = models.BooleanField(default = False)

	def isUniqueRequirement(self):
		return self.requirement_set.count() == 1

	def __str__(self):
		return self.name

class Requirement(models.Model):
	pedido = models.ForeignKey(Order, on_delete = models.CASCADE)
	name = models.CharField(max_length = 50)
	quantity = models.IntegerField()

class TechnicalDetail(models.Model):
	requirement = models.ForeignKey(Requirement, on_delete = models.CASCADE)
	name = models.CharField(max_length = 50)
	value = models.CharField(max_length = 200)

class ComercialDetail(models.Model):
	order = models.ForeignKey(Order, on_delete = models.CASCADE)
	name = models.CharField(max_length = 50)
	value = models.CharField(max_length = 200)

