## 영화정보 사이트
### 7/30~31
- 몽고디비 연결(/server/config/dev.js)
- 메인페이지 템플릿 작성
- themoviedb.org 회원가입 및 api 키 등록
  - Config.js에 api의 url, key, image 경로 등록
  - fetch api를 사용하여 위의 사이트에서 영화정보 데이터 가져오기
  - 가져온 데이터를 state에 저장
- 메인페이지에 메인이미지 관련 컴포넌트 폴더 및 파일 생성
  - fetch api로 받은 데이터를 props로 메인페이지에 전달
<hr />
### 7/31 해야 할일
- Grid Card Component 만들기(v)
  - 최신영화관련 api는 안됨
  - 영화중 인기있는 영화들의 정보로 가져옴
- Load More Function 만들기(v)
  - 버튼 클릭 이벤트 작성후 추가 영화정보를 가져오는데 에러 발생
  - 에러코드
    - Updating a style property during rerender (background) when a conflicting property is set (backgroundSize) can lead to styling bugs.
    - 계속 MainImage컴포넌트에 css 충돌인듯한데, 이 부분은 최초 1번만 MainMovieImage 값을 할당해서 해결함
- MainImage도 클릭 가능하게 함
  - 그리드 부분은 메인이미지를 제외한 영화이미지로 정렬하게 바꿈

### 8/15 해야할일
- 메인페이지에 Load More 버튼 기능구현

### 8/16 해야할일
- 영화 상세페이지 구현(1)
  - 선택한 영화 이미지
  - 영화에 대한 정보 테이블

### 8/17 해야할일
- 영화 상세페이지 구현(2)
  - Open Actors 버튼 클릭 유무에 따라 버튼 문자열 바뀜.
  - 선택한 영화에 출연한 배우이미지 grid view
    - 이미지가 없는 배우는 안 보이게 함
    - 이미지 속성의 title 추가

### 8/18 todo...    
- 즐겨찾기 기능 구현(1)
  - Create to Favorite model(server)
  - Create Favorite Btn Component(client)
  - Added Favorite component to MovieDetailPage component(client)

### 8/19 todo...
- 즐겨찾기 기능 구현(2)
  - useEffect를 사용해서 서버단에 요청을 보내고 응답하는 것(client)
  - api uri와 라우터 연결(server)
  - 라우터에서 Favorite model을 이용하여 데이터베이스 정보 조회(server)

### 8/20 해야할일
- 즐겨찾기 기능 구현(3)
  - 
  