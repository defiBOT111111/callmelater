from django.db import models

# Create your models here.
class UploadedImage(models.Model):

    pdfs = models.FileField(null = True, blank=True)
    images = models.ImageField(null = True, blank=True)
