# MGMJ: card database of MGMJ 
카드 있는 거 등록해보자

## 필요 주요 기능
- 검색해서 카드 개별 등록
- 덱리 복붙하면 데이터베이스에 등록
- 카드 코드 입력 시 등록
- DB 등록된 전체 카드 리스트 표시
- DB 카드 리스트에서 유무 검색  

## Deploy
- add - commit - push 후 `npm run deploy`

## 진행상황
### 23.08.24
- 환경설정
    - --python: api로 데이터 가져오기--
    - TS+React: 데이터 표시 frontend

- 개발 내역
    - --app.py: localhost:5000 에서 data.json에 데이터 추가후 작성--
    - --getData.py: scryfall api GET api--
    - App.tsx: ajax 로 localhost:5000/cards 에 GET 요청 후 데이터 표시

### 23.08.25
- 개발 내역
    - SearchData.tsx: 데이터 GET api 이동
    - server 폴더 일단 빼고 진행
    - TabNav.tsx: 검색 유형에 따른 탭 