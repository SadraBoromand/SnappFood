from rest_framework import serializers
from . import models


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.City
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'


class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Food
        fields = '__all__'


class ShopsFoodSerializer(serializers.ModelSerializer):
    Foods = FoodSerializer(many=True, read_only=True)
    category = CategorySerializer(read_only=True)
    city = CitySerializer(read_only=True)

    class Meta:
        model = models.ShopsFood
        fields = '__all__'
