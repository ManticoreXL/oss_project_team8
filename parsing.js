const fs = require('fs')

// 파일을 읽어오는 함수
function readDataFromFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return data;
    } catch (err) {
        console.error('파일을 읽어오는 중 에러 발생:', err);
        return null;
    }
}

// 데이터를 가게 객체로 파싱하는 함수
function parseData(data) {
    const lines = data.split('\n');
    const stores = [];

    lines.forEach(line => {
        // 빈 줄 무시
        if (!line.trim()) {
            return;
        }

        const [name, location, distance, genre, foodType, priceInfo, costPerformance] = line.split('\t');
        
        // split 결과 확인
        if (!priceInfo) {
            console.error('Error parsing data. Check the format of the data file.');
            return;
        }

        const prices = priceInfo.split(/\s+/).filter(Boolean);

        const store = {
            name,          // 식당 이름
            location,      // 위치
            distance,      // 도보 기준 거리
            genre,         // 장르
            foodType,      // 음식 종류
            price: prices[0],  // 가격
            costPerformance: costPerformance.trim(),   // \r 제거
        };

        stores.push(store);
    });

    // 정렬 후 반환
    const collator = new Intl.Collator("ko", {sensitivity: "base"});
    stores.sort((a, b) => collator.compare(a.name, b.name));

    return stores;
}

// // 디버그 섹션
// const filePath = 'data.txt';
// const rawData = readDataFromFile(filePath);
// let parsedData;
// if (rawData)
//     parsedData = parseData(rawData);
// console.log(parsedData);

exports.readDataFromFile = readDataFromFile;
exports.parseData = parseData;