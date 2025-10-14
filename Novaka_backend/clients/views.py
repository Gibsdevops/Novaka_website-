# clients/views.py
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import ClientCategory
from .serializers import ClientCategorySerializer

class ClientCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Returns client categories with nested clients.
    """
    queryset = ClientCategory.objects.all().order_by('order')
    serializer_class = ClientCategorySerializer
    permission_classes = [AllowAny]
