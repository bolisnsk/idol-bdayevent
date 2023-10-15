# Near And Dear
<img src="https://capsule-render.vercel.app/api?type=모양&color=색상코드&height=높이&section=header&text=텍스트&fontSize=텍스트크기" />
## 📝 프로젝트 개요
![Introduce_02](https://github.com/bolisnsk/idol-bdayevent/assets/65267675/6991cd1a-3b65-4e9b-b381-4e79c8923416)
프로젝트: 웹 크롤링을 이용한 아이돌 이벤트 제공 사이트 <br/>
프로젝트 소개 : 아이돌 생일 이벤트는 팬덤 사이에서 큰 기념일 중 하나임. 주 정보원인 SNS 트위터에서 정보를 수집하기에 불편함이 있고, 아이돌 정보 제공 사이트나 어플에서도 이벤트 정보가 빈약함. 이를 개선하고자 이벤트 정보를 한 곳에 모아서 제공하는 사이트를 제작하기로 함.
분류: 팀 프로젝트  <br/>
팀 구성 : 프론트엔드, 디자이너 - 1명, 백엔드(서버) - 1명, 웹 크롤링 - 1명 
제작 기간: 아이디어 구상 - 2022. 09 ~ 12.<br/>
          구현 - 2023.01 ~ 06.<br/>
주요 기능: 모바일 반응형 웹, Fuzzywuzzy(유사도 검색)로 높은 검색 정확도, 트위터 게시물 추출, 이벤트명, 장소, 시간 제공<br/>

## 🛠 기술 및 도구
![Stack_02](https://github.com/bolisnsk/idol-bdayevent/assets/65267675/a787aff9-bbcb-48cb-8760-e7fcefcf43c5)

## 👨🏻‍💻 실행 화면
### 1. 메인화면
![Main](https://github.com/bolisnsk/idol-bdayevent/assets/65267675/6991cd1a-3b65-4e9b-b381-4e79c8923416)
<li> 그룹명 / 그룹명 + 멤버 이름 / 멤버 이름으로 검색 </li>
<li> 엔터로 검색 결과 넘기기 가능</li> <br/>
<li> Fuzzywuzzy(유사도 검색)을 이용하여 아이돌명 '자윤'과 '윤'과 검색결과가 겹치는 경우, 멤버명 '레이'의 검색 결과에 가게명 '포토레이블'이 포함되는 등의 문제를 개선 </li> <br/>

### 2. 이벤트 리스트 화면
![List](https://github.com/bolisnsk/idol-bdayevent/assets/65267675/b110cb09-0224-4ec4-a9f1-e390fde3ebaf)
<li> 각 버튼으로 카페, 전시회, 이벤트 결과만 볼 수 있음 </li>
<li> 데이터를 4개씩 불러오는 무한 스크롤로 구현 </li>
<li> Top 버튼으로 상단으로 이동, 로고 클릭으로 메인화면으로 돌아갈 수 있음 </li> <br/>

### 3. 이벤트 상세 페이지 화면
![Post_01](https://github.com/bolisnsk/idol-bdayevent/assets/65267675/d6d60dc6-d305-43d5-ae97-68d84ff52e5c) ![Post_02](https://github.com/bolisnsk/idol-bdayevent/assets/65267675/5a809d20-1098-4c72-810b-0df81de32455)
<li> 버튼을 통해 원본 트윗 새창으로 띄워서 제공 </li>
<li> 버튼을 통해 목록으로 되돌아가기 가능 </li>

## 🚀 실행 방법 
1. 터미널(Terminal) 접속.
2. NPM 설치(npm install).
4. 백엔드 디렉토리로 이동(cd backend).
5. django, djangorestframework, django-cors-header, fuzzywazzy, django-filters를 설치(pip install ~).
6. NPM 실행(npm start)
7. 서버 실행(python manage.py runserver)
