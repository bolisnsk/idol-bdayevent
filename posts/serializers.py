from rest_framework import serializers

from posts.models import Post, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("pk", "name")


class PostListSerializer(serializers.ModelSerializer):
    category = CategorySerializer

    class Meta:
        model = Post
        fields = ("pk", "category", "title", "start_day", "end_day", "address", "open_time", "close_time")


class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("pk", "title", "category", "address", "content", "url",
                  "image", "start_day", "end_day", "open_time", "close_time")


class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer

    class Meta:
        model = Post
        fields = ("pk", "title", "category", "url", "image", "content", "start_day",
                  "end_day", "address", "open_time", "close_time")
