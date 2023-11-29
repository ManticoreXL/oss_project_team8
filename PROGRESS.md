# Progress Report for Team #8
## Progress Summary
1. 광운대학교 주변 식당 정보에 대한 raw data 작성 완료 (data.txt)
2. raw data 구문분석 및 자료구조화 완료 (parsing.js)
3. 서버-클라이언트 구조의 데이터 처리 및 전송 구조 구현
4. 메인 페이지 - 서버에서 전송받은 데이터 리스트화하여 출력 가능
5. 정렬 및 분류 - JavaScript로 구현 완료 + HTML에서 핸들러 구현 필요
6. 룰렛 기능 및 페이지 구현 필요
7. Web 스타일링 필요

## Project Schedule
### 11/10 ~ 11/16: 세부사항 설계
- data.txt 형식 및 구문분석 양식, 포함할 데이터, 태그 분류 기준 설정
- Web의 대략적인 레이아웃, 페이지를 기능별로 분류하여 구현을 목표로 설정
### 11/16 ~ 12/01: 주요 기능 구현
- 이름, 위치, 메뉴 등의 정보를 포함하는 식당 객체를 자료구조화하여 구현
- data.txt에서 구문분석을 통해 해당 정보를 가진 객체 리스트 추출 구현
- HTML 페이지에서 서버로 데이터 요청 및 리퀘스트로 식당 리스트 출력 구현
- 룰렛 기능 및 페이지 구현 작업중
### 11/20 ~ 12/01: Web 디자인
- 메인 페이지: data.txt의 식당 정보를 리스트로 출력
- 정렬 및 분류: 메인 페이지에서 버튼으로 진입 가능
- Web 스타일링 작업중

## Project Screenshot
![progress_screenshot](https://github.com/ManticoreXL/oss_project_team8/assets/130516868/c1183ab2-1ce2-46c1-9033-9588930dd290)
페이지 진입 시 식당 데이터 출력, 정렬 기능 및 룰렛 페이지 구현 예정

## Individual Progress Status
### 강현민
- HTML - 입력 받은 데이터에 따라 div 동적 생성 및 삽입 [(Commit Link)](https://github.com/ManticoreXL/oss_project_team8/commit/8eef19066bb16ffc267c854d417cc619bb53b503)
- CSS - 테스트를 위한 리스트 아이템 심플 CSS 스타일링 [(Commit Link)](https://github.com/ManticoreXL/oss_project_team8/commit/07ed9d87e5a9936c73b98615cee01d9c0b29430c)

### 유건호
- HTML - navbar에 정렬, 분류 버튼 + 핸들러 함수 구현 [(Commit Link)](https://github.com/ManticoreXL/oss_project_team8/commit/eae50955bbfd1b541aa31c9d01f863a929d2f022)
- CSS - 버튼 스타일링 (분류 * 3, 정렬) [(Commit Link)](https://github.com/ManticoreXL/oss_project_team8/commit/c5e0b1db76148018f68b33cfa9cf630179f57033)

### 최민석
- JS+HTML 레이아웃 설정, 페이지 전환 버튼 [(Commit Link)](https://github.com/ManticoreXL/oss_project_team8/commit/020b78939fdcfc623c25fc03f5a536be72dcf16c)
- insertToList함수에서 각 element별 div 동적 생성 및 append [(Commit Link)](https://github.com/ManticoreXL/oss_project_team8/commit/1c7f782bf070598ab7674e605835f681317db195)
- 데이터를 특정 태그만 포함하는 리스트만 분류 [(Commit Link)](https://github.com/ManticoreXL/oss_project_team8/commit/aaca5a57fba4460e0103540feab29c654755eba9)
- JS http 서버 + data.txt 서버에서 전처리화 + 로드 시 데이터 리스트 리퀘스트 [(Commit Link)](https://github.com/ManticoreXL/oss_project_team8/commit/649f4c191cf833878063c626386eecf7038c768e)

### 홍왕기
- 광운대학교 주변 식당 자료조사 (raw data 수집) [(Commit Link)](https://github.com/ManticoreXL/oss_project_team8/commit/0595ddd2a2236ab989ff07cbe823af49271388b6)
- data.txt 작성 + 데이터 구문분석 및 리스트화 구현 [(Commit Link)](https://github.com/ManticoreXL/oss_project_team8/commit/0595ddd2a2236ab989ff07cbe823af49271388b6)
- 데이터를 가격을 키값으로 오름차순, 내림차순 정렬 구현 [(Commit Link)](https://github.com/ManticoreXL/oss_project_team8/commit/1062e5f3a135973a50efba73587ede86e2aac270)
