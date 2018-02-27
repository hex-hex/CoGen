# Generated by Django 2.0.2 on 2018-02-26 21:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EntityBuilder', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='BooleanField',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_null', models.BooleanField(default=True)),
                ('is_blank', models.BooleanField(default=True)),
                ('field_name', models.CharField(blank=True, max_length=255, null=True)),
                ('default_value', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='FloatField',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('is_null', models.BooleanField(default=True)),
                ('is_blank', models.BooleanField(default=True)),
                ('field_name', models.CharField(blank=True, max_length=255, null=True)),
                ('default_value', models.FloatField(default=0)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
