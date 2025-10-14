from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from core.views import CompanyInfoViewSet
from services.views import ServiceViewSet
from team.serializers import TeamMemberSerializer
from team import serializers as team_serializers
from team.views import TeamMemberViewSet
from clients.views import ClientCategoryViewSet
from testimonials.views import TestimonialViewSet
from contact.views import ContactCreateView
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'company', CompanyInfoViewSet, basename='company')
router.register(r'services', ServiceViewSet, basename='services')
router.register(r'team', TeamMemberViewSet, basename='team')
router.register(r'clients', ClientCategoryViewSet, basename='clients')
router.register(r'testimonials', TestimonialViewSet, basename='testimonials')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/contact/', ContactCreateView.as_view(), name='contact'),
    path('api/schema/', SpectacularAPIView.as_view(), name='schema'),
    path('api/docs/', SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
