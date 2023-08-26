from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=128)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['id']


class Post(models.Model):
    title = models.CharField(max_length=128)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, blank=True, null=True)
    address = models.CharField(max_length=128)
    content = models.TextField(blank=True)
    url = models.URLField(blank=True)
    image = models.URLField(blank=True, null=True)
    create_dt = models.DateTimeField(auto_now_add=True)
    update_dt = models.DateTimeField(auto_now=True)
    start_day = models.DateField()
    end_day = models.DateField()
    open_time = models.TimeField()
    close_time = models.TimeField()

    class Meta:
        ordering = ['-id']

    def __str__(self):
        return self.title
