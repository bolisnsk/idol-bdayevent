# 아이돌 이벤트 정보 제공 사이트

```설치
① pip install django | pip install djangorestframework
② pip install django-filter
③ pip install django-cors-headers
④ pip install pillow```
     
     주소
     ① ViewSet
     http://127.0.0.1:8000/categorys/
     http://127.0.0.1:8000/categorys/(카테고리 번호:pk)
     http://127.0.0.1:8000/posts/ 
     http://127.0.0.1:8000/posts/(포스터 번호:pk)

     ② Generics
     http://127.0.0.1:8000/generics/category/
     http://127.0.0.1:8000/generics/category/(카테고리 번호:pk)
     http://127.0.0.1:8000/generics/post/
     http://127.0.0.1:8000/generics/post/(포스터 번호:pk)

     ③ APIView
     http://127.0.0.1:8000/category-list/
     http://127.0.0.1:8000/category-list/(카테고리 번호:pk)
     http://127.0.0.1:8000/post-list/
     http://127.0.0.1:8000/post-list/(포스터 번호:pk)
