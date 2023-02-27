from django.urls import path
from rest_framework import routers

from posts.views import CategoryListAPIView, CategoryAPIView, PostListAPIView, PostAPIView, \
    CategoryAPIGenerics, CategoryListAPIGenerics, PostListAPIGenerics, PostAPIGenerics

from posts.views import PostViewSet, CategoryViewSet

router = routers.SimpleRouter()
router.register('posts', PostViewSet)  # ViewSet
router.register('categorys', CategoryViewSet)  # ViewSet

urlpatterns = router.urls + [
    path('generics/category/', CategoryListAPIGenerics.as_view()),  # Generics
    path('generics/category/<int:pk>', CategoryAPIGenerics.as_view()),  # Generics
    path('generics/post/', PostListAPIGenerics.as_view()),  # Generics
    path('generics/post/<int:pk>', PostAPIGenerics.as_view()),  # Generics

    path('category-list/', CategoryListAPIView.as_view()),  # APIView
    path('category-list/<int:pk>/', CategoryAPIView.as_view()),  # APIView
    path('post-list/', PostListAPIView.as_view()),  # APIView
    path('post-list/<int:pk>/', PostAPIView.as_view()),  # APIView
]
