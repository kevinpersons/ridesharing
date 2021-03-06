Offers = new Mongo.Collection('offers');
Asks = new Mongo.Collection('asks');
Rides = new Mongo.Collection('rides');

if (Meteor.isClient) {

  Meteor.subscribe("rides");
  Meteor.subscribe("offers");
  Meteor.subscribe("asks");

  Template.displayasks.helpers({
  'asks':function() {
    return Asks.find({}, {sort: {submitted: -1}});
  }
});

  Meteor.startup(function() {
    // resize the content list whenever window is resized
    $(window).resize(function(evt) {
      $("#contentList").css('max-height',$(window).height()-130);
    });
    // set up sAlerts (the unintrusive pop-up messages)
    sAlert.config({
        offset: 40, // in px
    });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Meteor.publish("rides", function () {
    return Rides.find();
  });
  Meteor.publish("offers", function () {
    return Offers.find();
  });
  Meteor.publish("asks", function () {
    return Asks.find();
  });

  Meteor.startup(function () {
    // code to run on server at startup
  });

  Accounts.config({
    restrictCreationByEmailDomain: 'williams.edu',
    sendVerificationEmail: true
  });
};

// popular error handling method found online
throwError = function(error, reason, details) {
  var meteorError = new Meteor.Error(error, reason, details);

  if (Meteor.isClient) {
    // this error is never used
    // on the client, the return value of a stub is ignored
    return meteorError;
  } else if (Meteor.isServer) {
    throw meteorError;
  }
};
