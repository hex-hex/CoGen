from django.db import models


# Create your models here.
class Entity(models.Model):
    entity_name = models.CharField(max_length=255, null=True, blank=True)
    string_fields = models.ManyToManyField('StringField', blank=True)
    int_fields = models.ManyToManyField('IntField', blank=True)
    many_to_many_fields = models.ManyToManyField('ManyToManyField', blank=True)
    foreign_key = models.ManyToManyField('ForeignKey', blank=True)


class BaseField(models.Model):
    is_null = models.BooleanField(default=True)
    is_blank = models.BooleanField(default=True)
    field_name = models.CharField(max_length=255, null=True, blank=True)
    
    class Meta:
        abstract = True


class StringField(BaseField):
    max_length = models.PositiveIntegerField(default=255)


class ManyToManyField(BaseField):
    entity_name = models.CharField(max_length=255, null=True, blank=True)


class ForeignKey(BaseField):
    entity_name = models.CharField(max_length=255, null=True, blank=True)
    
    
class IntField(BaseField):
    default_value = models.IntegerField(default=0)
