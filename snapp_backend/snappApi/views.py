from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from . import models
from . import serializers


class UserViewApi(APIView):

    def get(self, req: Request):
        users = models.User.objects.all()
        serializer = serializers.UserSerializer(users, many=True)
        return Response(serializer.data, status.HTTP_200_OK)

    def post(self, req: Request):
        username = req.data.get('username')
        password = req.data.get('password')
        print({username, password})
        try:
            user = models.User.objects.get(username=username, password=password)
            serializer = serializers.UserSerializer(user)
            return Response(serializer.data, status.HTTP_202_ACCEPTED)
        except:
            return Response(None, status.HTTP_401_UNAUTHORIZED)


class CityViewApi(APIView):

    def get(self, req: Request):
        id = req.query_params.get('id')
        if id != None:
            cities = models.City.objects.get(pk=int(id))
            serializer = serializers.CitySerializer(cities)
        else:
            cities = models.City.objects.all()
            serializer = serializers.CitySerializer(cities, many=True)

        return Response(serializer.data, status.HTTP_200_OK)


class CategoryViewApi(APIView):

    def get(self, req: Request):
        id = req.query_params.get('id')
        if id != None:
            try:
                categories = models.Category.objects.get(pk=id)
                serializer = serializers.CategorySerializer(categories)
            except:
                return Response(None, status.HTTP_404_NOT_FOUND)

        else:
            categories = models.Category.objects.all()
            serializer = serializers.CategorySerializer(categories, many=True)

        return Response(serializer.data, status.HTTP_200_OK)


class ShopsFoodViewApi(APIView):

    def get(self, req: Request):
        id = req.query_params.get('id')
        if id != None:
            try:
                shopsFood = models.ShopsFood.objects.get(pk=id)
                serializer = serializers.ShopsFoodSerializer(shopsFood)
            except:
                return Response(None, status.HTTP_404_NOT_FOUND)

        else:
            shopsFood = models.ShopsFood.objects.all()
            serializer = serializers.ShopsFoodSerializer(shopsFood, many=True)

        return Response(serializer.data, status.HTTP_200_OK)


class FoodViewApi(APIView):

    def get(self, req: Request):
        id = req.query_params.get('id')
        if id != None:
            try:
                food = models.Food.objects.get(pk=id)
                serializer = serializers.FoodSerializer(food)
            except:
                return Response(None, status.HTTP_404_NOT_FOUND)

        else:
            food = models.Food.objects.all()
            serializer = serializers.FoodSerializer(food, many=True)

        return Response(serializer.data, status.HTTP_200_OK)


class SearchApiView(APIView):

    def get(self, req: Request):
        city_id = req.query_params.get('city')
        category_id = req.query_params.get('category')
        shopsFood = models.ShopsFood.objects.all()
        if city_id != None:
            shopsFood = shopsFood.filter(city=city_id)
            # filter(category=category_id, city=city_id))
        if category_id != None:
            shopsFood = shopsFood.filter(category=category_id)

        serializer = serializers.ShopsFoodSerializer(shopsFood, many=True)
        return Response(serializer.data, status.HTTP_200_OK)


class SearchFoodApiView(APIView):

    def get(self, req: Request):
        title = req.query_params.get('title')
        foods = models.Food.objects.all()
        if title != None:
            foods = foods.filter(title__contains=title)

        serializer = serializers.FoodSerializer(foods, many=True)
        return Response(serializer.data, status.HTTP_200_OK)
