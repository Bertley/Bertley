import io 
from django.shortcuts import render
from Skills.models import Skill
from django.views.generic import (TemplateView, ListView, DetailView, CreateView, UpdateView, DeleteView)
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger

from django.conf import settings
# Returning PDFS 
from django.http import HttpResponseRedirect
 

class ListView(ListView):
    model = Skill

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        return context


class DetailView(DetailView): 
    model = Skill

    def get_context_data(self, **kwargs): 
        context = super().get_context_data(**kwargs)
        return context