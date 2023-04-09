from rest_framework import serializers

from near_and_dear.models import Category, Post, Review, ReviewComment


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ("pk", "name")


class PostListSerializer(serializers.ModelSerializer):
    category = CategorySerializer

    class Meta:
        model = Post
        fields = ("pk", "category", "url", "title", "start_day", "end_day", "address", "open_time", "close_time")


class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("pk", "title", "category", "address", "content", "url",
                  "image", "start_day", "end_day", "open_time", "close_time")


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ("pk", "title", "category", "address", "content", "url",
                  "image", "start_day", "end_day", "open_time", "close_time")


class ReviewListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ("pk", "title")
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ("pk", "title", "content", "image")
class ReviewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ("title", "content", "image")
class ReviewCommentSerializer(serializers.ModelSerializer):
    review = ReviewSerializer
    class Meta:
        model = ReviewComment
        fields = ("pk", "review", "content", "create_dt", "update_dt")
class ReviewCommentCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReviewComment
        fields = ("review", "content")