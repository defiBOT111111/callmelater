from django.urls import path
from . import views


app_name = "myapp"
urlpatterns = [
    path("myapp/", views.index, name="index"),
    path("myapp/paste", views.paste, name="paste")

]
