Template.map.helpers({
  mapOptions: function() {
    if (GoogleMaps.loaded()) {
      return {
        center: new google.maps.LatLng(42.712828, -73.205570),
        zoom: 13
      };
    }
  }
});

Template.map.onCreated(function() {
  GoogleMaps.ready('map', function(map) {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(GoogleMaps.maps.map.instance);
    directionsService.route({
      origin: 'Williams College, 880 Main St, Williamstown, MA 01267',
      destination: $('#dest').text() + ', ' + $('#addr').text(),
      travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        sAlert.error('Directions request failed due to ' + status);
      }
    });
  });
});
