# Generated by Django 4.2.5 on 2023-09-24 07:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('snappApi', '0003_alter_shopsfood_city'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shopsfood',
            name='category',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='snappApi.category'),
        ),
        migrations.AlterField(
            model_name='shopsfood',
            name='city',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='snappApi.city'),
        ),
    ]
