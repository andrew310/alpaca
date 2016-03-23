function initialize() {
  var center = new google.maps.LatLng(48.091534,15.5116439);
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var markers = [];
  for (var i = 0; i < 100; i++) {
    var dataPhoto = data.photos[i];
    var latLng = new google.maps.LatLng(dataPhoto.latitude,
              dataPhoto.longitude);
    var marker = new google.maps.Marker({
      position: latLng
    });
    markers.push(marker);
  }
  var markerCluster = new MarkerClusterer(map, markers);
}

google.maps.event.addDomListener(window, 'load', initialize);