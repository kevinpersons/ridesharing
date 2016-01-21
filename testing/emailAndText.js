Router.route('/', function () {

});

if (Meteor.isClient) {
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
        //sAlert("Sending following text to "+responseData.from + ":\n"+responseData.body);
        console.log("Sending following text to "+responseData.from + ":\n"+responseData.body);
      }
    });
  }
});

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
