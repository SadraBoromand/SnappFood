from django.db import models


# Create your models here.

class City(models.Model):
    title = models.CharField(max_length=150)

    def __str__(self):
        return self.title

    class Meta:
        db_table = "City"


class User(models.Model):
    username = models.CharField(max_length=150)
    password = models.CharField(max_length=150)
    city = models.ForeignKey(City, on_delete=models.CASCADE)

    def __str__(self):
        return self.username

    class Meta:
        db_table = "User"


class Category(models.Model):
    title = models.CharField(max_length=150)
    iconUrl = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        db_table = "Category"


class Food(models.Model):
    title = models.CharField(max_length=150)
    price = models.DecimalField(decimal_places=0, max_digits=10)
    bannerUrl = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        db_table = "Food"


class ShopsFood(models.Model):
    title = models.CharField(max_length=150)
    rank = models.FloatField(max_length=50)
    bannerUrl = models.TextField()
    iconUrl = models.TextField()
    category = models.OneToOneField(Category, on_delete=models.CASCADE)
    city = models.OneToOneField(City, on_delete=models.CASCADE)
    Foods = models.ManyToManyField(Food)

    def __str__(self):
        return self.title

    class Meta:
        db_table = "ShopsFood"
