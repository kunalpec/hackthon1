from django.urls import path
from app import views

urlpatterns = [
    path("", views.login_page, name="login_page"),
    path("login_check/", views.login_pass, name="login_pass"),
    path("home/", views.home, name="home"),
]