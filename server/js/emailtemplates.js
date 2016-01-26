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
