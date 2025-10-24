from django.contrib import admin
from .models import Resume, Project

@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ('title', 'uploaded_at')
    fields = ('title', 'resume_file', 'external_link')

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'tech_stack', 'order', 'created_at')
    list_editable = ('order',)
    fields = ('title', 'description', 'tech_stack', 'link', 'order')
