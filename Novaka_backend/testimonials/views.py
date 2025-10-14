from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Testimonial
from .serializers import TestimonialSerializer


class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Returns all published testimonials ordered by creation date.
    """
    queryset = Testimonial.objects.filter(published=True).order_by('-created_at')
    serializer_class = TestimonialSerializer
    permission_classes = [AllowAny]
