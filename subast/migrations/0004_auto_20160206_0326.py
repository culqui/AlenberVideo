# -*- coding: utf-8 -*-
# Generated by Django 1.10.dev20160121001305 on 2016-02-06 08:26
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('subast', '0003_auto_20160206_0320'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='name',
            field=models.CharField(max_length=50, unique=True),
        ),
    ]
