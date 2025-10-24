from django.shortcuts import render
from .models import Resume, Project

def home(request):
    return render(request, 'home/index.html')

def resume(request):
    resume_obj = Resume.objects.first()
    context = {'resume': resume_obj}
    return render(request, 'home/resume.html', context)

def projects(request):
    all_projects = Project.objects.all()
    context = {'projects': all_projects}
    return render(request, 'home/projects.html', context)

def contact(request):
    return render(request, 'home/contact.html')
