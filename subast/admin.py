from django.contrib import admin

# Register your models here.

from .models import Company, Category, Product, Order, Requirement, User, Rol

class ProductInline(admin.TabularInline):
	model = Product
	extra = 0

class CategoryInline(admin.TabularInline):
	model = Category
	extra = 0

class UserInline(admin.TabularInline):
	model = User
	extra = 1
		

class CategoryAdmin(admin.ModelAdmin):
	inlines = [ProductInline]

class CompanyAdmin(admin.ModelAdmin):
	inlines = [CategoryInline, UserInline]

admin.site.register(Rol)
admin.site.register(Company, CompanyAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Order)