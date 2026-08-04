// distance.js


function calculateDistance(postLat, postLng, userLat, userLng){

    const earthRadius = 6371000;


    const postLatRad = postLat * (Math.PI / 180);

    const userLatRad = userLat * (Math.PI / 180);


    const deltaLat = (userLat - postLat) * (Math.PI / 180);

    const deltaLng = (userLng - postLng) * (Math.PI / 180);



    const a =
        Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(postLatRad) *
        Math.cos(userLatRad) *
        Math.sin(deltaLng / 2) *
        Math.sin(deltaLng / 2);



    const c = 2 * Math.atan2(
        Math.sqrt(a),
        Math.sqrt(1 - a)
    );


    return earthRadius * c;

}



function addDistanceToUsers(users, post){

    const distanceWithUsers = [];


    for (const userInfo of users){


        const distance = calculateDistance(
            post.latitude,
            post.longitude,
            userInfo.latitude,
            userInfo.longitude
        );


        distanceWithUsers.push({
            ...userInfo,
            distance: distance
        });


    }


    return distanceWithUsers;

}


module.exports = {
    calculateDistance,
    addDistanceToUsers
};