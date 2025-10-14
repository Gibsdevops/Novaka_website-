from django.contrib import admin
from .models import ClientCategory, Client

class ClientInline(admin.TabularInline):
    model = Client
    extra = 1

@admin.register(ClientCategory)
class ClientCategoryAdmin(admin.ModelAdmin):
    inlines = [ClientInline]
    list_display = ('title', 'order')
    ordering = ('order',)
