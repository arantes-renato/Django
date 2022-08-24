from django.http import HttpResponse
from django.shortcuts import render

def testedev(request):
    return HttpResponse('teste')

def taskslist(request):
    return render(request,'tasks/list.html')

def yourName(request, name):
    return render(request,'tasks/yourname.html', {'name': name})
