from django.db import models
from django.contrib.auth.models import User 
from datetime import datetime
from django.template.defaultfilters import slugify
from django.urls import reverse 
from django.utils import timezone
from tinymce.models import HTMLField
from Projects.models import Project

class Skill(models.Model): 
    """
    Skill Object 
    """
    title = models.CharField(max_length=100)
    handle = models.SlugField(unique=True, blank=True)
    description = HTMLField(blank=True)
    image = models.ImageField(upload_to='collections/', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    projects = models.ManyToManyField(Project)

    class Meta: 
        ordering = ['title']

    def __str__(self): 
        return self.title

    def save(self, *args, **kwargs): 
        self.slug = slugify(self.title)
        return super(Skill, self).save(*args, **kwargs)