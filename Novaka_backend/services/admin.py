from django.contrib import admin
from .models import Service, ServiceItem

class ServiceItemInline(admin.TabularInline):
    model = ServiceItem
    extra = 1

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    inlines = [ServiceItemInline]
    list_display = ('title', 'order', 'featured')
    prepopulated_fields = {"slug": ("title",)}
