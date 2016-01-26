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
