# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-01-12 15:18
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('form', '0002_auto_20170112_0229'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='User',
            new_name='Contact',
        ),
        migrations.RemoveField(
            model_name='response',
            name='breaks',
        ),
        migrations.RemoveField(
            model_name='response',
            name='closing',
        ),
        migrations.RemoveField(
            model_name='response',
            name='opening',
        ),
        migrations.RemoveField(
            model_name='response',
            name='rid',
        ),
        migrations.RemoveField(
            model_name='response',
            name='sick',
        ),
    ]
