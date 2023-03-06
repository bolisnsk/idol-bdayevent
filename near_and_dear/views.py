from django.http import HttpResponse
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.pagination import PageNumberPagination

from near_and_dear.models import Category, Post
from near_and_dear.serializers import CategorySerializer, PostListSerializer, PostSerializer


class CategoryListAPIGenerics(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = [SearchFilter, DjangoFilterBackend]
    filterset_fields = ['id', 'name']
    search_fields = ['name']


class CategoryAPIGenerics(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class PostResultsSetPagination(PageNumberPagination):
    page_size = 4

class PostListAPIGenerics(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostListSerializer
    pagination_class = PostResultsSetPagination
    filter_backends = [SearchFilter, DjangoFilterBackend]
    filterset_fields = ['id', 'category']
    search_fields = ['title', 'address']


class PostAPIGenerics(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
