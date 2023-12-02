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
const tagedList_KR = cf.classification(parsedData, "한식");
const tagedList_JP = cf.classification(parsedData, "일식");
const tagedList_CN = cf.classification(parsedData, "중식");

// 거리, 가격으로 정렬한 리스트 셋업
const sortedList_dist_A = st.sortData(parsedData, "distance", 0);
const sortedList_dist_D = st.sortData(parsedData, "distance", 1);
const sortedList_price_A = st.sortData(parsedData, "price", 0);
const sortedList_price_D = st.sortData(parsedData, "price", 1);


// // 데이터 요청
// app.post('/data', (req, res) => {
//     res.send(parsedData);
// });

// // 서버 구동 표시
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });
