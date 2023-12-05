const ps = require("./parsing");
const cf = require("./classification");
const st = require("./sorting");
const rt = require("./roulette");

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// 데이터 파일 로드
const filePath = 'data.txt';
const rawData = ps.readDataFromFile(filePath);

let parsedData;

if (rawData)
    parsedData = ps.parseData(rawData);

// 메뉴로 분류한 리스트 셋업
let tagedList_KR = cf.classification(parsedData, "한식");
let tagedList_JP = cf.classification(parsedData, "일식");
let tagedList_CN = cf.classification(parsedData, "중식");
let tagedList_WS = cf.classification(parsedData, "양식");

// 거리, 가격으로 정렬한 리스트 셋업
let sortedList_dist_A = st.sortData(parsedData, "distance", 0);
let sortedList_dist_D = st.sortData(parsedData, "distance", 1);
let sortedList_price_A = st.sortData(parsedData, "price", 0);
let sortedList_price_D = st.sortData(parsedData, "price", 1);

// 뽑기
let roulette_default = rt.roulette(parsedData);

// 기본값 데이터 전송
app.post('/data', (req, res) => {
    res.send(parsedData);
});

// 메뉴별 데이터 전송
app.post('/tagKR', (req, res) => {
    res.send(tagedList_KR);
});

app.post('/tagJP', (req, res) => {
    res.send(tagedList_JP);
});

app.post('/tagCN', (req, res) => {
    res.send(tagedList_CN);
});

app.post('/tagWS', (req, res) => {
    res.send(tagedList_WS);
});

// 거리순 정렬 데이터 요청 (오름차순)
app.post('/dSortA', (req, res) => {
    res.send(sortedList_dist_A);
});

// 거리순 정렬 데이터 요청 (내림차순)
app.post('/dSortD', (req, res) => {
    res.send(sortedList_dist_D);
});

// 가격순 정렬 데이터 요청 (오름차순)
app.post('/pSortA', (req, res) => {
    res.send(sortedList_price_A);
});

// 가격순 정렬 데이터 요청 (내림차순)
app.post('/pSortD', (req, res) => {
    res.send(sortedList_price_D);
});

// 룰렛 데이터 요청 (기본값)
app.post('/rtDefault', (req, res) => {
    res.send(roulette_default);
});

// 서버 구동 표시
app.listen(port, () => {
    console.log(`KW-MukList app listening on port ${port}`);
});
