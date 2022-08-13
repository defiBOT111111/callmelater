from django import forms
from django.conf import settings
from django.core.files.storage import default_storage
import os, random, string
from .models import UploadedImage


class UploadForm(forms.ModelForm):
    class Meta:
        model = UploadedImage
        fields=('pdfs', 'images')

