// initialize content list height to maximize space
Template.content.rendered = function() {
  $("#contentList").css('max-height',$(window).height()-130);
  setInterval(function () {
    Session.set("time", new Date());
    }, 60000);
};

Template.content.helpers({
  'ridesHelper':function() {
    return Rides.find({departureTime : { $gte : new Date() } }, {sort: {departureTime: 1}} ) || {};
  },
  'seatsHelper':function(numSeats) {
    var countArr = [];
    for (var i=0; i<numSeats; i++){
      countArr.push({});
    }
    return countArr;
  },
  'formatDest':function(dest) {
    if (dest.indexOf(',') != -1) {
      return dest.substring(0, dest.indexOf(','));
    }
    return dest;
  },
  'formatDepartureTime':function(departureTime) {
    var diff =  departureTime - new Date();
    var minutes = ("0" + Math.floor( (diff/1000/60) % 60 )).slice(-2);
    var hours = ("0" + Math.floor( diff/(1000*60*60) )).slice(-2);

    var detailString = "";
    var depDateTime = new Date(departureTime);
    var hrs = depDateTime.getHours();
    if (hrs > 12) { detailString += (hrs % 12) + " pm"; }
    else { detailString += hrs + " am"; }
    if (depDateTime.getDate() == new Date().getDate() + 1) { detailString += " tomorrow"; }
    else { detailString += " today"; }

    return hours + " hours " + minutes + " minutes" + " (" + detailString  + ")";
  },
  'currTime':function() {
    return Session.get('time');
  }
});
