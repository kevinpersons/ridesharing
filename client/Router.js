Router.route('/', function () {
  this.render('content');
  this.render('emptySidebar', { to: 'aside' });
  this.layout('layout');
  $('#about-button').removeClass('navbar-bold');
  $('#home-button').addClass('navbar-bold');
  $('.login-display-name').removeClass('navbar-bold');
});
Router.route('/about', function () {
  this.render('about');
  this.layout('layout');
  $('#about-button').addClass('navbar-bold');
  $('#home-button').removeClass('navbar-bold');
  $('.login-display-name').removeClass('navbar-bold');
});
Router.route('/account', function () {
  this.render('account')
  this.layout('layout');
  $('#about-button').removeClass('navbar-bold');
  $('#home-button').removeClass('navbar-bold');
  $('.login-display-name').addClass('navbar-bold');
});
Router.route('/new', function () {
  this.render('new');
  this.layout('layout');
  $('#about-button').removeClass('navbar-bold');
  $('#home-button').removeClass('navbar-bold');
  $('.login-display-name').removeClass('navbar-bold');
});
Router.route('/new/trip', function () {
  this.render('newTrip');
  this.layout('layout');
});
Router.route('/new/notification', function () {
  this.render('newNotification');
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
