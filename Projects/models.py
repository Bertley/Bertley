from django.db import models
from django.contrib.auth.models import User 
from datetime import datetime
from django.template.defaultfilters import slugify
from django.urls import reverse 
from django.utils import timezone
from tinymce.models import HTMLField

class Project(models.Model): 
    """
    Project Object 
    """
    title = models.CharField(max_length=100)
    handle = models.SlugField(unique=True, blank=True)
    paragraph = models.TextField(blank=True)
    active = models.BooleanField(default=False)
    description = HTMLField(blank=True)
    url = models.URLField(max_length=200, blank=True)
    featured_image = models.ImageField(upload_to='project/', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self): 
        return "<Project:%s>" % self.title

    class Meta:
        ordering = ['-created_at']

    def save(self, *args, **kwargs): 
        self.slug = slugify(self.title)
        super(Project, self).save(*args, **kwargs)

    

class Collection(models.Model): 
    """
    Collection Object 
    """
    title = models.CharField(max_length=100)
    handle = models.SlugField(unique=True, blank=True)
    description = HTMLField(blank=True)
    image = models.ImageField(upload_to='collections/', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self): 
        return self.title

    def save(self, *args, **kwargs): 
        self.slug = slugify(self.title)
        super(Collection, self).save(*args, **kwargs)


class ProjectCollection(models.Model): 
    """
    Link Projects to Collections
    """
    project = models.ForeignKey('Project', related_name='project_collection', on_delete=models.CASCADE)
    collection = models.ForeignKey('Collection', related_name='collection_project', on_delete=models.CASCADE)

class ProjectImage(models.Model): 
    """
    Link Projects to Images 
    """
    alt = models.CharField(max_length=200, unique=True)
    src = models.ImageField(upload_to='project/')
    project = models.ForeignKey('Project', related_name='project_image', on_delete=models.CASCADE)