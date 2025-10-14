from rest_framework import generics
from .models import ContactMessage
from .serializers import ContactMessageSerializer
from rest_framework.permissions import AllowAny
from django.core.mail import send_mail
from django.conf import settings

class ContactCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]

    def perform_create(self, serializer):
        instance = serializer.save()
        # send email to site owner (safeguard: wrap in try/except in production)
        try:
            send_mail(
                subject=f"New contact from {instance.name}",
                message=f"{instance.message}\n\nContact: {instance.email} {instance.phone}",
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.CONTACT_RECIPIENT_EMAIL],
                fail_silently=True,
            )
        except Exception:
            pass
