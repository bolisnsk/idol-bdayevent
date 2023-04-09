from django.conf.urls.static import static
from django.urls import path

from config import settings
from . import views
from .views import CategoryListAPIGenerics, CategoryAPIGenerics, PostListAPIGenerics, PostAPIGenerics, \
    ReviewListAPIGenerics, ReviewAPIGenerics, ReviewCreateAPIGenerics, ReviewCommentListAPIGenerics, \
    ReviewCommentAPIGenerics, ReviewCommentCreateAPIGenerics

urlpatterns = [
                  path('category/', CategoryListAPIGenerics.as_view()),
                  path('category/<int:pk>', CategoryAPIGenerics.as_view()),

                  path('post/', PostListAPIGenerics.as_view()),
                  path('post/<int:pk>', PostAPIGenerics.as_view()),

                  path('review/', ReviewListAPIGenerics.as_view()),
                  path('review/<int:pk>', ReviewAPIGenerics.as_view()),
                  path('review/create', ReviewCreateAPIGenerics.as_view()),

                  path('review/comment/', ReviewCommentListAPIGenerics.as_view()),
                  path('review/comment/<int:pk>', ReviewCommentAPIGenerics.as_view()),
                  path('review/comment/create', ReviewCommentCreateAPIGenerics.as_view()),
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
