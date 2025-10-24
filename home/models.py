from django.db import models

class Resume(models.Model):
    title = models.CharField(max_length=200, default="My Resume")
    resume_file = models.FileField(upload_to='resumes/', blank=True, null=True)
    external_link = models.URLField(blank=True, null=True, help_text="Google Drive or external resume link")
    uploaded_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        verbose_name = "Resume"
        verbose_name_plural = "Resume"
    
    def __str__(self):
        return self.title
    
    def get_resume_url(self):
        if self.resume_file:
            return self.resume_file.url
        return self.external_link

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tech_stack = models.CharField(max_length=300)
    link = models.URLField()
    order = models.IntegerField(default=0, help_text="Order of display (lower numbers first)")
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['order', '-created_at']
    
    def __str__(self):
        return self.title
