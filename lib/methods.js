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
  },

  insertRide: function(nowTime, destination, address, placeId, departureDateTime, numSeats,
                      departureLoc, vehicleDesc, returnTime, amount, note) {

    Rides.insert({
      createdAt: nowTime,
      destinationName: destination,
      destinationAddress: address,
      placeId: placeId,
      departureTime: departureDateTime,
      availableSeats: numSeats,
      seatsLeft: numSeats,
      departureLocation: departureLoc,
      vehicleDescription: vehicleDesc,
      returnTime: returnTime,
      compensationAmount: amount,
      note: note
    })
  },

  insertAsk: function(destTextA, userA, durTextA, dolTextA, whenA, submittedOn) {
    Asks.insert({
      destination: destTextA,
      name: userA,
      duration: durTextA,
      dollar: dolTextA,
      time: whenA,
      submitted: submittedOn
    });
  },

  decrementSeatCount: function(rideId) {
    if (! Meteor.userId()) {
      return throwError('unauthorized-unfav','You must sign in to join rides.');
    }
    if (Rides.findOne(rideId).seatsLeft > 0) {
      Rides.update(rideId, { $inc: { seatsLeft: -1 } });
    }
  }
});
