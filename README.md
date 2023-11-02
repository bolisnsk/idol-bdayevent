# Near And Dear

## 📝 프로젝트 개요
![Introduce_02](https://github.com/bolisnsk/idol-bdayevent/assets/50792699/20cd3f02-0c68-4fbe-8d75-1f79dae5bd94)
> **프로젝트 :** 웹 크롤링을 이용한 아이돌 이벤트 제공 사이트 <br/><br/>
**프로젝트 소개:** 아이돌 생일 이벤트는 팬덤 사이에서 큰 기념일 중 하나임.
주 정보원인 SNS 트위터에서 정보를 수집하기에 불편함이 있고, 아이돌 정보 제공 사이트나 어플에서도 이벤트 정보가 빈약함.
이를 개선하고자 이벤트 정보를 한 곳에 모아서 제공하는 사이트를 제작하기로 함. <br/><br/>
**분류:** 팀 프로젝트  <br/><br/>
**팀 구성:** 프론트엔드, 디자이너 - 1명([깃허브](https://github.com/bolisnsk)), 백엔드(서버) - 1명([깃허브](https://github.com/TH0903)), 백엔드(웹 크롤링) - 1명([깃허브](https://github.com/peachmoch2)) <br/><br/>
**제작 기간:** 아이디어 구상 - 2022. 09 ~ 12.<br/>
          구현 - 2023.01 ~ 06.<br/><br/>
**주요 기능:** 모바일 반응형 웹, Fuzzywuzzy(유사도 검색)로 높은 검색 정확도, 트위터 게시물 추출, 이벤트명, 장소, 시간 제공<br/>

## 🛠 기술 및 도구
![badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![badge](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white) ![badge](https://img.shields.io/badge/Python-14354C?style=for-the-badge&logo=python&logoColor=white) ![badge](https://img.shields.io/badge/Adobe%20Photoshop-31A8FF?style=for-the-badge&logo=Adobe%20Photoshop&logoColor=black) ![badge](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ![badge](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)
<br/>
## 👨🏻‍💻 실행 화면
### 1. 메인화면
![Main](https://github.com/bolisnsk/idol-bdayevent/assets/50792699/20cd3f02-0c68-4fbe-8d75-1f79dae5bd94)
<li> 그룹명 / 그룹명 + 멤버 이름 / 멤버 이름으로 검색 </li>
<li> 엔터로 검색 결과 넘기기 가능</li>
<li> Fuzzywuzzy(유사도 검색)을 이용하여 아이돌명 '자윤'과 '윤'과 검색결과가 겹치는 경우, 멤버명 '레이'의 검색 결과에 가게명 '포토레이블'이 포함되는 등의 문제를 개선 </li> <br/>
(23.11.02. 모바일 화면 수정)
<img width="200" height="400" src="https://github.com/bolisnsk/idol-bdayevent/assets/50792699/623a1215-dce3-4ba1-9c2c-e347744f9f3f"/>

### 2. 이벤트 리스트 화면
![List](https://github.com/bolisnsk/idol-bdayevent/assets/65267675/b110cb09-0224-4ec4-a9f1-e390fde3ebaf)
<li> 각 버튼으로 카페, 전시회, 이벤트 결과만 볼 수 있음 </li>
<li> 데이터를 4개씩 불러오는 무한 스크롤로 구현 </li>
<li> Top 버튼으로 상단으로 이동, 로고 클릭으로 메인화면으로 돌아갈 수 있음 </li> <br/>
(23.11.02. 리스트 화면 디자인 수정, 네비게이션바 추가)
<img width="1278" alt="elist" src="https://github.com/bolisnsk/idol-bdayevent/assets/50792699/7b953e64-cf57-44fb-9093-a56034876bd1">
<img width="225" alt="listm" src="https://github.com/bolisnsk/idol-bdayevent/assets/50792699/c1716292-eef0-448a-8935-7371f4351856">
<img width="223" alt="listn" src="https://github.com/bolisnsk/idol-bdayevent/assets/50792699/6c0c1cb4-5741-48da-a601-fb26a97a9a84"> <br/>

### 3. 이벤트 상세 페이지 화면
![Post_01](https://github.com/bolisnsk/idol-bdayevent/assets/65267675/d6d60dc6-d305-43d5-ae97-68d84ff52e5c) ![Post_02](https://github.com/bolisnsk/idol-bdayevent/assets/65267675/5a809d20-1098-4c72-810b-0df81de32455)
<li> 버튼을 통해 원본 트윗 새창으로 띄워서 제공 </li>
<li> 버튼을 통해 목록으로 되돌아가기 가능 </li><br/>
(23.11.02 디자인 수정)
<img width="1278" alt="elist" src="https://github.com/bolisnsk/idol-bdayevent/assets/50792699/7ec41fb3-bf09-4ab5-b952-725de4adab62">
<img width="278" alt="elistm" src="https://github.com/bolisnsk/idol-bdayevent/assets/50792699/0192abd0-8301-4f26-ba05-5d389cca0ca6"> <br/>

## 🚀 실행 방법 
1. 터미널(Terminal) 접속.
2. NPM 설치(npm install).
4. 백엔드 디렉토리로 이동(cd backend).
5. django, djangorestframework, django-cors-header, fuzzywazzy, django-filters를 설치(pip install ~).
6. NPM 실행(npm start)
7. 서버 실행(python manage.py runserver)
