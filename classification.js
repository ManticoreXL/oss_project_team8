// 태그를 포함하는 리스트 반환
function classification(restaurants, tag) {
    let result = [];

    restaurants.forEach(restaurant => {
        // 태그 포함하는지 체크
        if (restaurant.genre === tag || restaurant.foodType === tag) {
            result.push(restaurant);
        }
    });

    // 분류된 리스트 반환
    return result;
}

exports.classification = classification;