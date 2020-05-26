import io 
from django.shortcuts import render
from Projects.models import Project, ProjectCollection
from django.views.generic import (TemplateView, ListView, DetailView, CreateView, UpdateView, DeleteView)
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from django.conf import settings
# Returning PDFS 
from django.http import HttpResponseRedirect
 
def get_project_list_common_data(request, projects_all_list): 
    paginator = Paginator(projects_all_list, settings.EACH_PAGE_PROJECT_NUMBER)
    # Get page parameter from the url 
    page_num = request.GET.get('page', 1) 
    page_of_projects = paginator.get_page(page_num)
    # Get the current page number 
    currentr_page_num = page_of_projects.number 
    # Get the page range of 2 pages before and after the current page number
    page_range = list(range(max(currentr_page_num - 2, 1), currentr_page_num)) + \
        list (range(currentr_page_num, min(currentr_page_num + 2, paginator.num_pages) + 1))

    # Add omitted page number mark 
    if page_range[0] - 1 >= 2:
        page_range.insert(0, '...')
    if paginator.num_pages - page_range[-1] >= 2: 
        page_range.append('...')
    if page_range[0] != 1: 
        page_range.insert(0,1)
    if page_range[-1] != paginator.num_pages: 
        page_range.append(paginator.num_pages)

    project_dates = Project.objects.dates('created_at', 'month', order="DESC")
    project_dates_dict = {}
    for project_date in project_dates: 
        project_count = Project.objects.filter(created_at__year=project_date.year, \
            created_at__month=project_date.month).count()
        project_dates_dict[project_date] = project_count

    
    context = {}
    context['projects'] = page_of_projects.object_list
    context['page_of_projects'] = page_of_projects
    context['page_range'] = page_range
    context['project_dates'] = project_dates_dict

    return context

def project_list(request):
    project_list = Project.objects.all().filter(active=True)
    context = get_project_list_common_data(request, project_list)
    return render(request, 'project/list.html', context)

def resume(request):
    return HttpResponseRedirect("https://s3.ca-central-1.amazonaws.com/encoreedu/Resume.pdf") 
    
class ProjectDetailView(DetailView):
    model = Project
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context
