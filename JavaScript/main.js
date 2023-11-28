import { readDataFromFile, parseData } from './parsing.js';
import { classification } from './classification.js';

// 데이터 파일 경로
const filePath = 'data.txt';

// 파일에서 데이터 읽기
const rawData = readDataFromFile(filePath);

if (rawData) {
    // 데이터 파싱
    const parsedData = parseData(rawData);

    console.log(parsedData);
}

const tagedList = classification(rawData, "한식");
console.log(tagedList);

// 룰렛 함수 작성 필요

// 사다리타기 함수 작성 필요