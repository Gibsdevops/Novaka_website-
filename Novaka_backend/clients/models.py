from django.db import models

class ClientCategory(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.title

class Client(models.Model):
    category = models.ForeignKey(ClientCategory, related_name='clients', on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='clients/', blank=True, null=True)
    website = models.URLField(blank=True)

    def __str__(self):
        return self.name
