from django.db import models


# Create your models here.
class Entity(models.Model):
    entity_name = models.CharField(max_length=255, null=True, blank=True)
    string_fields = models.ManyToManyField('StringField', blank=True)
    int_fields = models.ManyToManyField('IntField', blank=True)
    enum_fields = models.ManyToManyField('EnumField', blank=True)
    date_time_fields = models.ManyToManyField('DateTimeField', blank=True)
    many_to_many_fields = models.ManyToManyField('ManyToManyField', blank=True)
    foreign_keys = models.ManyToManyField('ForeignKey', blank=True)

    def __str__(self):
        return self.entity_name


class BaseField(models.Model):
    is_null = models.BooleanField(default=True)
    is_blank = models.BooleanField(default=True)
    field_name = models.CharField(max_length=255, null=True, blank=True)
    
    class Meta:
        abstract = True

    def __str__(self):
        return self.field_name


class StringField(BaseField):
    max_length = models.PositiveIntegerField(default=255)


class ManyToManyField(BaseField):
    link_entity = models.ForeignKey('Entity', null=True, blank=True, on_delete=models.CASCADE)


class ForeignKey(BaseField):
    link_entity = models.ForeignKey('Entity', null=True, blank=True, on_delete=models.CASCADE)
    
    
class IntField(BaseField):
    default_value = models.IntegerField(default=0)


class FloatField(BaseField):
    default_value = models.FloatField(default=0)


class BooleanField(BaseField):
    default_value = models.BooleanField(default=False)


class DateTimeField(BaseField):
    params = models.CharField(max_length=32, null=True, blank=True)


class EnumField(BaseField):
    default_value = models.IntegerField(default=0)
