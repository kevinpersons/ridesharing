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
