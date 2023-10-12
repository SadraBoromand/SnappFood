from django.urls import path
from . import views

urlpatterns = [
    # path('api/', include('snappApi.urls'))

    path('user/', views.UserViewApi.as_view()),

    path('city/', views.CityViewApi.as_view()),
    path('city/<int:id>', views.CityViewApi.as_view()),

    path('category/', views.CategoryViewApi.as_view()),
    path('category/<int:id>', views.CategoryViewApi.as_view()),

    path('shopFood/', views.ShopsFoodViewApi.as_view()),
    path('shopFood/<int:id>', views.ShopsFoodViewApi.as_view()),

    path('food/', views.FoodViewApi.as_view()),
    path('food/<int:id>', views.FoodViewApi.as_view()),

    path('search/', views.SearchApiView.as_view()),
    path('searchFood/', views.SearchFoodApiView.as_view()),
]
