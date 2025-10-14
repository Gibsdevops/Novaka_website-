from rest_framework import viewsets
from .models import CompanyInfo
from .serializers import CompanyInfoSerializer
from rest_framework.permissions import IsAdminUser, AllowAny

class CompanyInfoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CompanyInfo.objects.all()
    serializer_class = CompanyInfoSerializer
    permission_classes = [AllowAny]
