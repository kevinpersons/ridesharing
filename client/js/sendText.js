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
