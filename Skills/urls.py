from django.urls import path
from Skills import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.ListView.as_view(template_name='skills/list.html'), name='skills'), 
    path('<int:pk>', views.DetailView.as_view(template_name='skills/item.html'), name='skill-detail'), 
]