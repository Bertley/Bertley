from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('tinymce/', include('tinymce.urls')),
    path('', include('Profile.urls')), 
    path('resume/', include('Resume.urls')),
    path('projects/', include('Projects.urls')),
    path('skills/', include('Skills.urls'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)