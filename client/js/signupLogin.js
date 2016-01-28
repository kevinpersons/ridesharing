  Template.signup.events({
        'submit form': function(event) {
          event.preventDefault();
          var emailVar = event.target.signupEmail.value;
          var passwordVar = event.target.signupPassword.value;
          Accounts.createUser({
            email: emailVar,
            password: passwordVar
          });
        }
      });
      Template.loginBox.events({
        'submit form': function(event) {
          event.preventDefault();
          var emailVar = event.target.loginEmail.value;
          var passwordVar = event.target.loginPassword.value;
          Meteor.loginWithPassword(emailVar, passwordVar);
          Router.go('/')
        }
      });

Template.settings.events({
       'click #logout-button': function(event) {
         event.preventDefault();
         Meteor.logout();
      }
  });
