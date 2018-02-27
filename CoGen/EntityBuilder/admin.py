from django.contrib import admin
from CoGen.EntityBuilder.models import *

# Register your models here.
admin.site.register(Entity)
admin.site.register(ForeignKey)
admin.site.register(ManyToManyField)
admin.site.register(StringField)
admin.site.register(IntField)
admin.site.register(EnumField)
admin.site.register(DateTimeField)
admin.site.register(BooleanField)
