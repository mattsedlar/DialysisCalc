# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-18 01:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0006_auto_20170114_1924'),
    ]

    operations = [
        migrations.AddField(
            model_name='response',
            name='unique_key',
            field=models.CharField(default='', max_length=8),
        ),
    ]