import re

from django.db.models import Q
from django.http import HttpResponse
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView, \
    CreateAPIView
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination
from fuzzywuzzy import fuzz

from near_and_dear.models import Category, Post, Review, ReviewComment
from near_and_dear.serializers import CategorySerializer, PostListSerializer, PostSerializer, ReviewListSerializer, \
    ReviewSerializer, ReviewCreateSerializer, ReviewCommentSerializer, ReviewCommentCreateSerializer


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


class PostListAPIGenerics(ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostListSerializer
    pagination_class = PostResultsSetPagination
    filter_backends = [SearchFilter, DjangoFilterBackend]
    filterset_fields = ['id', 'category']
    search_fields = ('title', 'address')

    def filter_queryset(self, queryset):
        search = self.request.query_params.get('search', None)
        category = self.request.query_params.get('category', None)
        pk = self.request.query_params.get('pk', None)

        def search_by_token_ratio(post):
            titleScore = fuzz.token_set_ratio(search, post.title) * 1.2
            addressScore = fuzz.token_set_ratio(search, post.address) * 10
            return titleScore, addressScore

        if category:
            queryset = queryset.filter(category=category)

        if pk:
            queryset = queryset.filter(pk=pk)

        if search:
            search = re.sub('[ㄱ-ㅎㅏ-ㅣ]+', '', search)
            queryset = queryset.filter(Q(title__icontains=search) | Q(address__icontains=search))
            for number in queryset:
                score = max(search_by_token_ratio(number))
                if score < 95:
                    print(f"검색어: {search} | 게시물: {number.title} | 주소: {number.address} | 점수: {score}")
            queryset = [post for post in queryset if max(search_by_token_ratio(post)) >= 95]

        return queryset




    # def get_queryset(self):
    #     queryset = Post.objects.all()
    #     keyword = self.request.query_params.get('search')
    # if keyword:
    #     queryset = queryset.filter(search_name=keyword)
    #     # queryset = queryset.filter(Q(title__icontains=keyword) | Q(content__icontains=keyword))
    # return queryset

class PostAPIGenerics(RetrieveAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class ReviewListAPIGenerics(ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewListSerializer
class ReviewAPIGenerics(RetrieveAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
class ReviewCreateAPIGenerics(CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewCreateSerializer


class ReviewCommentListAPIGenerics(ListAPIView):
    queryset = ReviewComment.objects.all()
    serializer_class = ReviewCommentSerializer
class ReviewCommentAPIGenerics(RetrieveAPIView):
    queryset = ReviewComment.objects.all()
    serializer_class = ReviewCommentSerializer
class ReviewCommentCreateAPIGenerics(CreateAPIView):
    queryset = ReviewComment.objects.all()
    serializer_class = ReviewCommentCreateSerializer
