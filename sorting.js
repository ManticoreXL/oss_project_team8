const fs = require('fs');
const ps = require("./parsing");

// 거리로 정렬하는 함수
function sortByDistance(order) {
    return (a, b) => {
        const distanceA = parseFloat(a.distance);
        const distanceB = parseFloat(b.distance);

        if (order === 0)
             return distanceA - distanceB; // 오름차순
        else
            return distanceB - distanceA; // 내림차순
    };
}

// 가격으로 정렬하는 함수
function sortByPrice(order) {
    return (a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);

        if (order === 0)
            return priceA - priceB; // 오름차순
        else
           return priceB - priceA; // 내림차순
    }
}

// 본체
function sortData(restaurants, type, order) {
    let result = [];

    restaurants.forEach(data => {
        result.push(data);
    });

    if(type == "distance")
        return result.sort(sortByDistance(order));
    else if(type == "price")
        return result.sort(sortByPrice(order));
}

exports.sortData = sortData;

// // 디버그 섹션
// const filePath = "data.txt";
// const rawData = ps.readDataFromFile(filePath);
// const parsedData = ps.parseData(rawData);

// const sortedData = sortData(parsedData, "name", 0);
// console.log(sortedData);