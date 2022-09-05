
from django.urls import path

from . import views

urlpatterns = [
    path('testedev/', views.testedev),
    path('', views.taskslist, name='tasks-list'),
    path('task/<int:id>', views.taskView, name="task-view"),
    path('newtask/', views.newTask, name="new-task"),
    path('yourname/<str:name>', views.yourName, name='your-name'),
]
