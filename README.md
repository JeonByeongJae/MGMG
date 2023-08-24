# MGMJ: card database of MGMJ 
카드 있는 거 등록해보자

## 진행상황
### 23.08.24
- 환경설정
    - python: api로 데이터 가져오기
    - TS+React: 데이터 표시 frontend

- 개발 내역
    - app.py: localhost:5000 에서 data.json에 데이터 추가후 작성
    - getData.py: scryfall api GET api
    - App.tsx: ajax 로 localhost:5000/cards 에 GET 요청 후 데이터 표시