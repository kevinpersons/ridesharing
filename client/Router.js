Router.route('/', function () {
  this.render('content');
  this.render('pickTrip', { to: 'aside'} );
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
  this.render('asks');
  this.layout('layout');
});
Router.route('/routes', function () {
  this.render('content');
  this.render('routes', {to: 'aside'});
  this.layout('layout');
});
Router.route('/displayasks', function () {
  this.render('content');
  this.render('displayasks', {to: 'aside'});
  this.layout('layout');
});
Router.route('/trip/:_id', function() {
  this.render('content');
  this.render('trip', {
    to: 'aside',
    data: function() {
      return Rides.findOne({_id: this.params._id});
    }
  });
  this.layout('layout');
});
