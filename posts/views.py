from django.shortcuts import render, get_object_or_404
from django.db.models import Q
from django.views import generic
from django_filters.rest_framework import DjangoFilterBackend, FilterSet
from rest_framework import viewsets, status, generics
from rest_framework.filters import SearchFilter
from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response
from rest_framework.views import APIView

from posts.models import Post, Category
from posts.serializers import PostListSerializer, PostSerializer, PostCreateSerializer, CategorySerializer


# Create your views here.


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    filter_backends = [SearchFilter, DjangoFilterBackend]
    filterset_fields = ['id', 'category']
    search_fields = ('title', 'address')

    def get_serializer_class(self):
        if self.action == 'list':
            return PostListSerializer
        elif self.action == 'retrieve':
            return PostSerializer
        return PostCreateSerializer


class CategoryListAPIGenerics(ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = [SearchFilter, DjangoFilterBackend]
    filterset_fields = ['id', 'name']
    search_fields = ['name']


class CategoryAPIGenerics(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class PostListAPIGenerics(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostListSerializer
    filter_backends = [SearchFilter, DjangoFilterBackend]
    filterset_fields = ['id', 'category']
    search_fields = ['title', 'address']


class PostAPIGenerics(RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = PostSerializer


class DefaultResultsSetPagination(PageNumberPagination):
    page_size = 3
    page_size_query_param = 'page_size'
    max_page_size = 1000


class CategoryListAPIView(APIView):
    pagination_class = DefaultResultsSetPagination()

    def get(self, request):
        categoryList = Category.objects.all()
        categoryName = request.query_params.get('name')  # 필터
        categoryPk = request.query_params.get('pk')  # 필터
        search = request.GET.get('Search', '')

        if categoryName:
            categoryList = categoryList.filter(name=categoryName)
        if categoryPk:
            categoryList = categoryList.filter(pk=categoryPk)
        if search:
            categoryList = categoryList.filter(Q(name__icontains=search)).distinct()

        page = self.pagination_class.paginate_queryset(queryset=categoryList, request=request)
        if page is not None:
            serializer = CategorySerializer(page, many=True)
            return self.pagination_class.get_paginated_response(serializer.data)

        serializer = CategorySerializer(categoryList, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


class CategoryAPIView(APIView):
    def get(self, request, pk):
        category = get_object_or_404(Category, id=pk)
        serializer = CategorySerializer(category)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        category = get_object_or_404(Category, id=pk)
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        category = get_object_or_404(Category, id=pk)
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class PostListAPIView(APIView):
    pagination_class = DefaultResultsSetPagination()

    def get(self, request):
        postList = Post.objects.all()
        postCategory = request.query_params.get('category')  # 필터
        postPk = request.query_params.get('pk')  # 필터
        search = request.GET.get('search', '')
        if postCategory:
            postList = postList.filter(category=postCategory)
        if postPk:
            postList = postList.filter(pk=postPk)
        if search:
            postList = postList.filter(Q(address__icontains=search) | Q(title__icontains=search)).distinct()

        page = self.pagination_class.paginate_queryset(queryset=postList, request=request)
        if page is not None:
            serializer = PostListSerializer(page, many=True)
            return self.pagination_class.get_paginated_response(serializer.data)

        serializer = PostListSerializer(postList, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = PostCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)


class PostAPIView(APIView):
    def get(self, request, pk):
        post = get_object_or_404(Post, id=pk)
        serializer = PostSerializer(post)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        post = get_object_or_404(Post, id=pk)
        serializer = PostSerializer(post, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        post = get_object_or_404(Post, id=pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)