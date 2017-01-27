# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-27 15:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0008_auto_20170123_1750'),
    ]

    operations = [
        migrations.AlterField(
            model_name='response',
            name='clinic_name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='response',
            name='email',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='response',
            name='facility',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='response',
            name='location',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='response',
            name='name',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='response',
            name='position',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='response',
            name='unique_key',
            field=models.CharField(max_length=8, null=True),
        ),
    ]