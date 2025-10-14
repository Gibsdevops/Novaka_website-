from rest_framework import viewsets
from .models import TeamMember
from .serializers import TeamMemberSerializer
from rest_framework.permissions import AllowAny

class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TeamMember.objects.all().order_by('order')
    serializer_class = TeamMemberSerializer
    permission_classes = [AllowAny]
