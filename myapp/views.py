import re
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib import messages





text = "texttexttextexttext"

# Create your views here.

def index(request):
    return render(request, "myapp/index.html", {
        "texts": text
    })


def paste(request):
    return render(request, "myapp/paste.html", {
        "copied" : text
    })
    