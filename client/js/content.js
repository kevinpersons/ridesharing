// initialize content list height to maximize space
Template.content.rendered = function() {
  $("#contentList").css('max-height',$(window).height()-130);
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
  takenSeatsHelper:function(totalSeats, numSeatsLeft) {
    var countArr = [];
    for (var i=0; i<totalSeats - numSeatsLeft; i++){
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
    // figure out actual departure time (i.e. 2:45pm today)
    var detailString = "";
    var depDateTime = new Date(departureTime);
    var hrs = depDateTime.getHours();
    var mins = depDateTime.getMinutes();
    if (mins < 10) { mins = "0" + mins; }
    if (hrs > 12) { detailString += (hrs % 12) + ":" + mins + "pm"; }
    else { detailString += hrs + ":" + mins + "am"; }
    if (depDateTime.getDate() == new Date().getDate() + 1) { detailString += " tomorrow"; }
    else { detailString += " today"; }

    return detailString;
  },
  isCurrentPage: function(pageName){
    return Router.current().route.getName() == pageName;
  },
  isCurrentPageId: function(id){
    return Router.current().params._id == id;
  }
});
