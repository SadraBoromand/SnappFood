from django.contrib import admin
from .models import City, User, Category, Food, ShopsFood

# Register your models here.


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'city']
    list_filter = ['city']


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ['title']


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['title']


@admin.register(Food)
class FoodAdmin(admin.ModelAdmin):
    list_display = ['title', 'price']


@admin.register(ShopsFood)
class ShopsFoodAdmin(admin.ModelAdmin):
    list_display = ['title', 'category']
    list_filter = ['category']
