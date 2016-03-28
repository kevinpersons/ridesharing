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
  },
  'click .login-display-name':function(event) {
    event.preventDefault();
    $("#navbar").collapse('hide');
    Router.go('/account');
  },
  'click #new-button':function(event) {
    event.preventDefault();
    $("#navbar").collapse('hide');
    Router.go('/new');
  }
});
