Router.route('/', function () {
  this.render('content');
  this.render('contentAside', {to: 'aside'});
  this.layout('layout');
  $('#about-button').removeClass('navbar-bold');
  $('#login-button').removeClass('navbar-bold');
  $('#home-button').addClass('navbar-bold');
});
Router.route('/about', function () {
  this.render('about');
  this.layout('layout');
  $('#about-button').addClass('navbar-bold');
  $('#login-button').removeClass('navbar-bold');
  $('#home-button').removeClass('navbar-bold');
});
Router.route('/login', function () {
  this.render('login');
  this.layout('layout');
  $('#about-button').removeClass('navbar-bold');
  $('#login-button').addClass('navbar-bold');
  $('#home-button').removeClass('navbar-bold');
});
Router.route('/new', function () {
  this.render('new');
  this.layout('layout');
  $('#about-button').removeClass('navbar-bold');
  $('#login-button').removeClass('navbar-bold');
  $('#home-button').removeClass('navbar-bold');
});
Router.route('/new/trip', function () {
  this.render('newTrip');
  this.layout('layout');
});
Router.route('/new/notification', function () {
  this.render('newNotification');
  this.layout('layout');
});
Router.route('/routes', function () {
  this.render('content');
  this.render('routes', {to: 'aside'});
  this.layout('layout');
});

if (Meteor.isClient) {

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

  // initialize content list height to maximize space
  Template.content.rendered = function() {
    $("#contentList").css('max-height',$(window).height()-130);
  };

  Template.googleLocationInput.rendered = function() {
    window.onload = function() {
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
    };
  };

  Template.sendText.events({
    'submit form':function(event) {
      event.preventDefault();

      var phoneNumBox = $(event.target).find('input[name=phoneNum]');
      var phoneNum = phoneNumBox.val();
      var textToSendBox = $(event.target).find('input[name=textBody]');
      var textToSend = textToSendBox.val();

      Meteor.call('sendText', phoneNum, textToSend, function(error) {
          if (error) {
            sAlert.error(error.reason);
          }
        });

      phoneNumBox.val('');
      textToSendBox.val('');
    }
  });

  Template.navbar.events({
    'click #brand-button':function(event) {
      event.preventDefault();
      $("#navbar").collapse('hide');
      Router.go('/');
    },
    'click #home-button':function(event) {
      event.preventDefault();
      $("#navbar").collapse('hide');
      Router.go('/');
    },
    'click #about-button':function(event) {
      event.preventDefault();
      $("#navbar").collapse('hide');
      Router.go('/about');
    },
    'click #login-button':function(event) {
      event.preventDefault();
      $("#navbar").collapse('hide');
      Router.go('/login');
    },
    'click #new-button':function(event) {
      event.preventDefault();
      $("#navbar").collapse('hide');
      Router.go('/new');
    }
  });

  Template.newTrip.events({
    'submit form':function(event) {
      event.preventDefault();
      sAlert.success('Form Submitted! (not really)')
    }
  });

  Template.newTrip.rendered = function () {
    $('.clockpicker').clockpicker();
  };
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  Accounts.config({
    restrictCreationByEmailDomain: 'williams.edu',
    sendVerificationEmail: true
  });

  /* Customize account verification email */
  Accounts.emailTemplates.verifyEmail.subject = function (user) {
    return "Please Verify Your Williams RideShare Account";
  };
  Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    var text = "Hello,\n\nTo verify your Williams RideShare account, " +
               "simply click the following link.\n\n" + url + "\n\n" +
               "Thanks,\nWilliams RideShare Team";
    return text;
  };
  Accounts.emailTemplates.from = "Williams RideShare Accounts <no-reply@meteor.com>"
}

Meteor.methods({
  sendText: function(num, msg) {
    twilio = Twilio('ACf01e1bc57f2e20055f19544ac35615d9', 'f6f7648b676184dae85628938d8c9c41');
    twilio.sendSms({
      to:'+1'+num, // Any number Twilio can deliver to
      from: '+14137765055', // A number you bought from Twilio and can use for outbound communication
      body: msg // body of the SMS message
    }, function(err, responseData) { //this function is executed when a response is received from Twilio
      if (!err) { // "err" is an error received during the request, if any
        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1
        console.log("Sending following text to "+responseData.from + ":\n"+responseData.body);
      }
      else {
        console.log(err);
      }
    });
  }
});
