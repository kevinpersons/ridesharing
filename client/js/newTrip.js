// initialize clockpicker and google maps location autocomplete box
Template.newTrip.rendered = function() {
  $('.clockpicker').clockpicker();
  GoogleMaps.init({
      'language': 'en',
      'libraries': 'places'
  },
  function() {
    // lat/lng represent a rectangle around Williamstown/North Adams
    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(42.635801, -73.302174),
      new google.maps.LatLng(42.738514, -73.072148)
    );
    input = document.getElementById('autocomplete');
    options = {
        // search for businesses rather than addresses, cities, etc
        types: ['establishment'],
        // US results only
        componentRestrictions: {country: 'us'},
        // use the Williamstown boundary above to bias results
        bounds: defaultBounds
    };
    autocomplete = new google.maps.places.Autocomplete(input, options);

    /*// When the user selects an address from the dropdown,
    google.maps.event.addListener(autocomplete, 'place_changed', function() {

         // Get the place details from the autocomplete object.
         var place = autocomplete.getPlace();

         console.log("place: " + JSON.stringify(place) );
    });*/
  });
};

Template.newTrip.events({
  'submit form':function(event) {
    event.preventDefault();

    var destination = $('#autocomplete').val();
    var departure = $('#departureField').val();
    var todayOrTomorrow = $('input[name=dayRadio]:checked').val();
    var seats = $('#numSeatsField').val();
    var departureLoc = $('#departureLocField').val();
    var vehicle = $('#vehicleField').val();
    var returnTime = $('#returnField').val();
    //var compensation = $('#compensationField').val();
    //var amount = $('#amountField').val();
    var note = $('#noteField').val();

    Meteor.call('insertRide',destination,seats);

    sAlert.success(destination + "\n" + departure  + "\n" + todayOrTomorrow + "\n" + seats
     + "\n" + departureLoc  + "\n" + vehicle + "\n" + returnTime + "\n" + note);
  }
});
