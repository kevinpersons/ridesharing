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
        //types: ['establishment'],
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

    // make sure something hopefully valid is entered
    var destination = $('#autocomplete').val();
    if (destination.length == "") { sAlert.error("Destination is required"); return; }
    if (destination.length < 5) { sAlert.error("Invalid destination"); return; }
    var googleObj = autocomplete.getPlace();
    if (googleObj == undefined) {
      sAlert.error("Please choose a destination recognized by Google Maps");
      return;
    }
    else {
      destination = googleObj.name;
      var address = googleObj.formatted_address;
      var placeId = googleObj.place_id;
    }

    // convert the departure time and validate it
    var departure = $('#departureField').val();
    var minsHrs = ConvertTime(departure);
    if (departure == "") { sAlert.error("Departure time is required"); return; }
    if (minsHrs == false) { sAlert.error("Invalid departure time"); return; }

    var todayOrTomorrow = $('input[name=dayRadio]:checked').val();
    var today = new Date();
    var departureDateTime = new Date();
    // if they are leaving tomorrow, increment the departure date
    if (todayOrTomorrow == "tomorrow") {
      departureDateTime.setDate(departureDateTime.getDate()+1);
    }
    // set the hours and minutes to be what was converted from input earlier
    departureDateTime.setHours(minsHrs[1],minsHrs[0],0);
    if (departureDateTime <= today) { sAlert.error("Departure time can't be in the past"); return; }


    var seats = $('#numSeatsField').val(); // forces valid selection

    // make sure something hopefully valid is entered
    var departureLoc = $('#departureLocField').val();
    if (departureLoc.length == "") { sAlert.error("Departure location is required"); return; }
    if (departureLoc.length < 4) { sAlert.error("Invalid departure location"); return; }

    // make sure something hopefully valid is entered
    var vehicleDesc = $('#vehicleField').val();
    if (vehicleDesc.length == "") { sAlert.error("Vehicle description is required"); return; }
    if (vehicleDesc.length < 4) { sAlert.error("Invalid vehicle description"); return; }

    var returnTime = $('#returnField').val();
    if (returnTime != "") {
      var minutesHours = ConvertTime(returnTime);
      if (minutesHours == false) { sAlert.error("Invalid return time"); return; }
      returnTime = new Date();
      returnTime.setTime(departureDateTime);
      returnTime.setHours(minutesHours[1],minutesHours[0],0);
      //alert(returnTime + " " + departudepartureDateTimereTime)
      if (returnTime <= departureDateTime) { sAlert.error("Return time must be after departure time"); return; }
    }

    // require valid compensation amount only if checkbox is checked
    var compensationReq = $('#compensationField').prop('checked');
    var amount;
    if (compensationReq) {
      amount = $('#amountField').val();
      if (amount == "") { sAlert.error("Please enter a compensation amount"); return; }
      if (!(amount >= 0 && amount <= 100)) { sAlert.error("Invalid compensation amount"); return; }
    }
    else { amount = 0; } // no compensation required => amount = 0

    var note = $('#noteField').val(); //optional, no validation

    Meteor.call('insertRide',today,destination,address,placeId,departureDateTime,seats,departureLoc,vehicleDesc,returnTime,amount,note);

    // reset form
    $('#autocomplete').val('');
    $('#departureField').val('');
    $('#departureLocField').val('');
    $('#vehicleField').val('');
    $('#returnField').val('');
    $('#amountField').val('');
    $('#noteField').val('');

    sAlert.success("Posted a new ride!")

    // redirect to home page, so user will see their newly posted ride offer
    setTimeout(function () {
      Router.go('/');
    }, 2000); //will call the function after 2 secs.
  }

});

function ConvertTime(str) {
  try {
      var hours = Number(str.match(/^(\d+)/)[1]);
      var minutes = Number(str.match(/:(\d+)/)[1]);
      var AMPM = str.match(/\s?([AaPp][Mm]?)$/)[1];
      var pm = ['P', 'p', 'PM', 'pM', 'pm', 'Pm'];
      var am = ['A', 'a', 'AM', 'aM', 'am', 'Am'];
      if (pm.indexOf(AMPM) >= 0 && hours < 12) hours = hours + 12;
      if (am.indexOf(AMPM) >= 0 && hours == 12) hours = hours - 12;
      var sHours = hours.toString();
      var sMinutes = minutes.toString();
      if (hours < 10) sHours = "0" + sHours;
      if (minutes < 10) sMinutes = "0" + sMinutes;
      return [sMinutes, sHours];
  }
  catch(err) {
      return false
    }
}
