from django.contrib import admin
from .models import Testimonial

@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('author', 'role', 'published', 'created_at')
    list_filter = ('published',)
    search_fields = ('author', 'content')
