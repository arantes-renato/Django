from pyexpat import model
from telnetlib import STATUS
from turtle import done, title, update
from venv import create
from django.db import models

    

class Task(models.Model):
    STATUS = (
        ('doing', 'Doing'),
        ('done', 'Done'),
    )
    
    title = models.CharField(max_length=255)
    description = models.TextField()
    done = models.CharField(
        max_length=5,
        choices=STATUS,
    )

    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title