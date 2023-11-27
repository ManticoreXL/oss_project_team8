import { readDataFromFile, parseData } from './parsing.js';

// 데이터 파일 경로
const filePath = 'data.txt';

// 파일에서 데이터 읽기
const rawData = readDataFromFile(filePath);

if (rawData) {
    // 데이터 파싱
    const parsedData = parseData(rawData);

    console.log(parsedData);
}

// 룰렛 함수 작성 필요

// 사다리타기 함수 작성 필요