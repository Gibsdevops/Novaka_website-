from django.core.management.base import BaseCommand
from core.models import CompanyInfo
from services.models import Service, ServiceItem
from team.models import TeamMember
from clients.models import ClientCategory, Client
from testimonials.models import Testimonial

class Command(BaseCommand):
    help = "Seed basic content from provided company profile"

    def handle(self, *args, **options):
        if not CompanyInfo.objects.exists():
            CompanyInfo.objects.create(
                name="NOVAK HOSPITALITY SOLUTIONS",
                subtitle="Powering Success",
                tagline="Tailored strategies for hospitality success."
            )
            self.stdout.write(self.style.SUCCESS("Created CompanyInfo"))

        # Sample service and items
        s, _ = Service.objects.get_or_create(title="Technology", defaults={'intro': 'POS & Back Office, Access Control...'})
        ServiceItem.objects.get_or_create(service=s, title="POS & Back Office")
        ServiceItem.objects.get_or_create(service=s, title="Access Control")
        self.stdout.write(self.style.SUCCESS("Seeded Services"))

        # sample team (use real names from doc)
        TeamMember.objects.get_or_create(name="Isaac, Jacob Luwo", defaults={'role': 'Founder'})
        TeamMember.objects.get_or_create(name="Tonny, Ochieng", defaults={'role': 'Senior Consultant'})
        self.stdout.write(self.style.SUCCESS("Seeded Team"))

        # sample client category
        cat, _ = ClientCategory.objects.get_or_create(title="Food & Beverages")
        Client.objects.get_or_create(category=cat, name="Sample Restaurant")
        self.stdout.write(self.style.SUCCESS("Seeded Clients"))

        Testimonial.objects.get_or_create(author="John Smith", content="Novak changed our operations.")
        self.stdout.write(self.style.SUCCESS("Seeded Testimonials"))
