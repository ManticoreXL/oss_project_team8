function roulette(restaurants) {
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    return restaurants[randomIndex];
}

// 룰렛 함수를 호출하여 선택된 식당을 얻습니다.
const selectedRestaurant = roulette(restaurants);

// 선택된 식당을 출력합니다.
console.log("Selected Restaurant:", selectedRestaurant);