from django.urls import path
from Projects import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.project_list, name='projects'), 
    path('<int:pk>', views.ProjectDetailView.as_view(template_name='project/item.html'), name='project-detail')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)