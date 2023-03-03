# 아이돌 이벤트 정보 제공 사이트

     요구사항
     PyCharm(선택, 필수는 아니지만 권장)
     Python 3.10
     Virtual Environment
     Pip Installs Packages(pip)
     
     설치 명령어
     ① pip install django | pip install djangorestframework
     ② pip install django-filter
     ③ pip install django-cors-headers
     ④ pip install pillow
     
     주소
     ① Generics
     http://127.0.0.1:8000/near_and_dear/category/
     http://127.0.0.1:8000/near_and_dear/category/(카테고리 번호:pk)
     http://127.0.0.1:8000/near_and_dear/post/
     http://127.0.0.1:8000/near_and_dear/post/(포스터 번호:pk)
    
    ?search=(제목, 주소) # 검색
    ?category=(Category_id), ?pk=(pk) # 필터
    
    ② Admin
    http://127.0.0.1:8000/admin/

    기타 명령어
    python manage.py runserver # 웹 실행
    python manage.py makemigrations # 데이터베이스 생성
    python manage.py migrate # 데이터베이스 적용
    python manage.py createsuperuser # 관리자 계정 생성
    (제가 만든 계정 → ID : admin | PW : admin1234)
     
    데이터베이스 초기화
    ① db.sqlite3 삭제, migrations 폴더에 __init__.py를 제외한 모든 파일 삭제.
    ② python manage.py makemigrations, python manage.py migrate 실행.
