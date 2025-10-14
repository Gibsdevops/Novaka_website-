from rest_framework import serializers
from .models import Service, ServiceItem

class ServiceItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceItem
        fields = ['id', 'title', 'description', 'icon', 'order']

class ServiceSerializer(serializers.ModelSerializer):
    items = ServiceItemSerializer(many=True, read_only=True)
    class Meta:
        model = Service
        fields = ['id', 'title', 'slug', 'intro', 'order', 'featured', 'items']
