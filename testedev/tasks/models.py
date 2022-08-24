from pyexpat import model
from telnetlib import STATUS
from turtle import done, title, update
from venv import create
from django.db import models

    

class Task(models.Model):
    STATUS = (
        (1, "Doing"),
        (2, "Done"),
    )
    
    title = models.CharField(max_length=255)
    description = models.TextField()
    done = models.CharField(
        max_length=1,
        choices=STATUS,
    )

    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)
