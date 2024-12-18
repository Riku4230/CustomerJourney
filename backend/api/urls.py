from django.urls import path
from . import views

urlpatterns = [
    path('workflow/run', views.workflow_run, name='workflow_run'),
]