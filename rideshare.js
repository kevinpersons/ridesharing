Offers = new Mongo.Collection('offers');
Asks = new Mongo.Collection('asks');
Rides = new Mongo.Collection('rides');

if (Meteor.isClient) {

  Meteor.subscribe("rides");
  Meteor.subscribe("offers");
  Meteor.subscribe("asks");

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
