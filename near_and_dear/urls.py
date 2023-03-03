from django.urls import path

from . import views
from .views import CategoryListAPIGenerics, CategoryAPIGenerics, PostListAPIGenerics, PostAPIGenerics

urlpatterns = [
    path('category/', CategoryListAPIGenerics.as_view()),
    path('category/<int:pk>', CategoryAPIGenerics.as_view()),
    path('post/', PostListAPIGenerics.as_view()),
    path('post/<int:pk>', PostAPIGenerics.as_view()),
]