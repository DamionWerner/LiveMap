var polyLineDataPoints = []
getLocationHistory();
function getLocationHistory() {
    var locData;
    var dbref = firebase.database().ref('/');
    dbref.limitToLast(20).on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            locData = []
            locData.push(childData['lat'])
            locData.push(childData['lon'])
            polyLineDataPoints.push(locData)
        });
        var polyline = L.polyline(polyLineDataPoints, { color: 'red' }).addTo(map);
        console.log(polyLineDataPoints);
        var marker = L.marker(polyLineDataPoints[polyLineDataPoints.length -1]).addTo(map);
        map.setView(polyLineDataPoints[polyLineDataPoints.length -1], 20);
    });
}