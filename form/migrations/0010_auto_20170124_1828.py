# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-24 18:28
from __future__ import unicode_literals

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0009_auto_20170124_0100'),
    ]

    operations = [
        migrations.AddField(
            model_name='response',
            name='phone_number',
            field=models.CharField(blank=True, max_length=12, validators=[django.core.validators.RegexValidator(message="Phone number must be entered in the format: '999-999-9999'. Up to 10 digits allowed.", regex='^[2-9]\\d{2}-\\d{3}-\\d{4}$')]),
        ),
        migrations.AddField(
            model_name='response',
            name='zipcode',
            field=models.CharField(default='99999', max_length=5),
        ),
    ]
