Template.trip.rendered = function() {
  GoogleMaps.init({
      'language': 'en',
      'libraries': 'places'
  },
  function() {
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    tripMap = new google.maps.Map($('#tripMap')[0], {
      //zoom: 15,
      //center: {lat: 42.713782, lng: -73.205057}
    });
    directionsDisplay.setMap(tripMap);

    var mapChangeHandler = function() {
      directionsService.route({
        origin: "Williams College, Williamstown, MA, United States",
        destination: $('#dest').text()+", "+$('#addr').text(),
        travelMode: google.maps.TravelMode.DRIVING
      }, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(response);
        } else {
          sAlert.error("Google was unable to find this location");
          // display just a map of Williamstown in case of error
          directionsService.route({
            origin: "Williams College, Williamstown, MA, United States",
            destination: "Williams College, Williamstown, MA, United States",
            travelMode: google.maps.TravelMode.DRIVING
          }, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
              directionsDisplay.setDirections(response);
            }
          });

        }
      });
    };

    mapChangeHandler();
  });
}

Template.trip.helpers({
  'formatTime':function(time) {
    return new Date(time).toLocaleString();
  }
});

Template.trip.events({
  'click #joinButton':function(event) {
    event.preventDefault();
    Meteor.call('decrementSeatCount', this._id, function(error) {
      if (error) {
        sAlert.error(error.reason);
      }
    });
    if (Rides.findOne(this._id).seatsLeft == 0) {
      Router.go('/');
    }
    // do other stuff later
  }
});
