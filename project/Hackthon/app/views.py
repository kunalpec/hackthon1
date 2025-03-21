import pickle
import numpy as np
import seaborn as sns
from django.http import JsonResponse
import matplotlib.pyplot as plt
import pandas as pd
import os
from django.shortcuts import render,HttpResponse
from django.conf import settings
import json
# Create your views here.
def login_page(request):
    return render(request,'login.html')

def login_pass(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST request required"}, status=400)

    # Get input values from request
    try:
        data = json.loads(request.body)  # Use JSON for body data
        username = data.get("user")
        password = data.get("pass")
    except (json.JSONDecodeError, AttributeError):
        return JsonResponse({"error": "Invalid data format"}, status=400)

    # Check credentials
    if username == 'Kunal' and password == 'root':
        return JsonResponse({"success": True, "message": "Login successful!"}, status=200)
    else:
        return JsonResponse({"success": False, "error": "Invalid username or password"}, status=401)
    
def home(request):
    return render(request,'home.html')
# render
# def 

