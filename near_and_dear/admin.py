from django.contrib import admin

from near_and_dear.models import Post, Category, Review, ReviewComment

# Register your models here.
admin.site.register(Post)
admin.site.register(Category)
admin.site.register(Review)
admin.site.register(ReviewComment)