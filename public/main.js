getLocationHistory();
var intervalId = window.setInterval(function(){
    getLocationHistory();
  }, 10000);
function getLocationHistory() {
    var polyLineDataPoints = []
    var locData;
    var dbref = firebase.database().ref('/');
    var zoomLevel;
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
        if (typeof(map.getZoom()) !== "undefined"){
            zoomLevel = map.getZoom();
        } else {
            zoomLevel = 15;
        }
        map.setView(polyLineDataPoints[polyLineDataPoints.length -1], zoomLevel);
    });
}