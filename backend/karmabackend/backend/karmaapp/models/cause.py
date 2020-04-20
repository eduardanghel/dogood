from django.db import models


class Cause(models.Model):
    name = models.CharField(max_length=20, blank=True, null=True)
    logo = models.URLField(blank=True, null=True)

    class Meta:
        verbose_name = "Karma: Causes"