from rest_framework import serializers
from .models import ClientCategory, Client

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id', 'name', 'logo', 'website']

class ClientCategorySerializer(serializers.ModelSerializer):
    clients = ClientSerializer(many=True, read_only=True)
    class Meta:
        model = ClientCategory
        fields = ['id', 'title', 'description', 'order', 'clients']
