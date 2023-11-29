// import { readDataFromFile, parseData } from './parsing.js';
// import { classification } from './classification.js';

const ps = require("./parsing");
const cf = require("./classification");

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));


let parsedData;

// 데이터 파일 경로
const filePath = 'data.txt';

// 파일에서 데이터 읽기
const rawData = ps.readDataFromFile(filePath);

if (rawData) {
    // 데이터 파싱
    parsedData = ps.parseData(rawData);
    console.log(parsedData);
}

const tagedList = cf.classification(rawData, "한식");
console.log(tagedList);


app.post('/data', (req, res) => {
    res.send(parsedData);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
