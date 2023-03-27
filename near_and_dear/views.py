from django.http import HttpResponse
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination
from fuzzywuzzy import fuzz

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

class PostResultsSetPagination(LimitOffsetPagination):
    default_limit = 4

class PostListAPIGenerics(ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostListSerializer
    pagination_class = PostResultsSetPagination
    filter_backends = [SearchFilter, DjangoFilterBackend]
    filterset_fields = ['id', 'category']
    search_fields = ('title', 'address')

    def filter_queryset(self, queryset):
        search = self.request.query_params.get('search', None)

        def sort_by_token_ratio(post):
            titleScore = fuzz.token_set_ratio(search, post.title)*1.2
            addressScore = fuzz.token_set_ratio(search, post.address)*10
            return titleScore, addressScore

        if search:
            queryset = super().filter_queryset(queryset)
            for number in queryset:
                score = max(sort_by_token_ratio(number))
                if score < 100:
                    print(f"검색어: {search} | 게시물: {number.title} | 주소: {number.address} | 점수: {score}")
#   Lamda - queryset = sorted(queryset, key=lambda post: fuzz.token_set_ratio(search, post.title), reverse=True)
            queryset = [post for post in queryset if max(sort_by_token_ratio(post)) >= 95]
        return queryset


class PostAPIGenerics(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
