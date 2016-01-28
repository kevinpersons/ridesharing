Template.asks.events({
  'submit form':function(event) {
    event.preventDefault();
    var userA = Meteor.userId();
    var destBarA = $('#destA').find(":selected");
    var destTextA = destBarA.text();
    var durBarA = $('#durA').find(":selected");
    var durTextA = durBarA.text();
    var dolBarA = $('#dolA').find(":selected");
    var dolTextA = dolBarA.text();
    var todayEightNineA = $('#td1A').is(':checked');
    var todayNineTenA = $('#td2A').is(':checked');
    var todayTenElevenA = $('#td3A').is(':checked');
    var todayElevenNoonA = $('#td4A').is(':checked');
    var todayNoonOnePmA = $('#td5A').is(':checked');
    var todayOneTwoPmA = $('#td6A').is(':checked');
    var todayTwoThreePmA = $('#td7A').is(':checked');
    var todayThreeFourPmA = $('#td8A').is(':checked');
    var todayFourFivePmA = $('#td9A').is(':checked');
    var todayFiveSixPmA = $('#td10A').is(':checked');
    var todaySixSevenPmA = $('#td11A').is(':checked');
    var todaySevenEightPmA = $('#td12A').is(':checked');
    var todayEightNinePmA = $('#td13A').is(':checked');
    var todayNineTenPmA = $('#td14A').is(':checked');
    var tomorrowEightNineA = $('#tm1A').is(':checked');
    var tomorrowNineTenA = $('#tm2A').is(':checked');
    var tomorrowTenElevenA = $('#tm3A').is(':checked');
    var tomorrowElevenNoonA = $('#tm4A').is(':checked');
    var tomorrowNoonOnePmA = $('#tm5A').is(':checked');
    var tomorrowOneTwoPmA = $('#tm6A').is(':checked');
    var tomorrowTwoThreePmA = $('#tm7A').is(':checked');
    var tomorrowThreeFourPmA = $('#tm8A').is(':checked');
    var tomorrowFourFivePmA = $('#tm9A').is(':checked');
    var tomorrowFiveSixPmA = $('#tm10A').is(':checked');
    var tomorrowSixSevenPmA = $('#tm11A').is(':checked');
    var tomorrowSevenEightPmA = $('#tm12A').is(':checked');
    var tomorrowEightNinePmA = $('#tm13A').is(':checked');
    var tomorrowNineTenPmA = $('#tm14A').is(':checked');
    var dayAfterEightNineA = $('#da1A').is(':checked');
    var dayAfterNineTenA = $('#da2A').is(':checked');
    var dayAfterTenElevenA = $('#da3A').is(':checked');
    var dayAfterElevenNoonA = $('#daA').is(':checked');
    var dayAfterNoonOnePmA = $('#da5A').is(':checked');
    var dayAfterOneTwoPmA = $('#da6A').is(':checked');
    var dayAfterTwoThreePmA = $('#da7A').is(':checked');
    var dayAfterThreeFourPmA = $('#da8A').is(':checked');
    var dayAfterFourFivePmA = $('#da9A').is(':checked');
    var dayAfterFiveSixPmA = $('#da10A').is(':checked');
    var dayAfterSixSevenPmA = $('#da11A').is(':checked');
    var dayAfterSevenEightPmA = $('#da12A').is(':checked');
    var dayAfterEightNinePmA = $('#da13A').is(':checked');
    var dayAfterNineTenPmA = $('#da14A').is(':checked');
    var dayA = new Date(Date.now());
    var dateA = dayA.getDate();
    var dateTmA = dateA + 1;
    var dateDaA = dateA + 2;
    var whenA = [];
      if(todayEightNineA === true) {
        whenA.push("Date: " + dateA + " Time: 8-9");
      };
      if(todayNineTenA === true) {
        whenA.push("Date: " + dateA + " Ti  me: 9-10");
      };
      if(todayTenElevenA === true) {
        whenA.push("Date: " + dateA + " Ti  me: 10-11");
      };
      if(todayElevenNoonA === true) {
        whenA.push("Date: " + dateA + " Ti  me: 11-12");
      };
      if(todayNoonOnePmA === true) {
        whenA.push("Date: " + dateA + " Ti  me: 12-1pm");
      };
      if(todayOneTwoPmA === true) {
        whenA.push("Date: " + dateA + " Ti  me: 1-2pm");
      };
      if(todayTwoThreePmA === true) {
        whenA.push("Date: " + dateA + " Ti  me: 2-3");
      };
      if(todayThreeFourPmA === true) {
        whenA.push("Date: " + dateA + " Ti  me: 3-4pm");
      };
      if(todayFourFivePmA === true) {
        whenA.push("Date:" + dateA + " Time: 4-5pm");
      };
      if(todayFiveSixPmA === true) {
        whenA.push("Date: " + dateA + " Ti  me: 5-6pm");
      };
      if(todaySixSevenPmA === true) {
        whenA.push("Date: " + dateA + " Ti  me: 6-7pm");
      };
      if(todaySevenEightPmA === true) {
        whenA.push("Date: " + dateA + " Ti  me: 7-8pm");
      };
      if(todayEightNinePmA === true) {
        whenA.push("Date: " + dateA + " Ti  me: 8-9pm");
      };
      if(todayNineTenPmA === true) {
        whenA.push("Date: " + dateA + " Ti  me: 9-10pm");
      };
      if(tomorrowEightNineA === true) {
        whenA.push("Date: " + dateTmA + "   Time: 8-9");
      };
      if(tomorrowNineTenA === true) {
        whenA.push("Date: " + dateTmA + "   Time: 9-10");
      };
      if(tomorrowTenElevenA === true) {
        whenA.push("Date: " + dateTmA + "   Time: 10-11");
      };
      if(tomorrowElevenNoonA === true) {
        whenA.push("Date: " + dateTmA + "   Time: 11-12");
      };
      if(tomorrowNoonOnePmA === true) {
        whenA.push("Date: " + dateTmA + "   Time: 12-1pm");
      };
      if(tomorrowOneTwoPmA === true) {
        whenA.push("Date: " + dateTmA + "   Time: 1-2pm");
      };
      if(tomorrowTwoThreePmA === true) {
        whenA.push("Date: " + dateTmA + "   Time: 2-3");
      };
      if(tomorrowThreeFourPmA === true) {
        whenA.push("Date: " + dateTmA + "   Time: 3-4pm");
      };
      if(tomorrowFourFivePmA === true) {
        whenA.push("Date: " + dateTmA + "   Time: 4-5pm");
      };
      if(tomorrowFiveSixPmA === true) {
        whenA.push("Date: " + dateTmA + "   Time: 5-6pm");
      };
      if(tomorrowSixSevenPmA === true) {
        whenA.push("Date: " + dateTmA + "   Time: 6-7pm");
      };
      if(tomorrowSevenEightPmA === true) {
        whenA.push("Date: " + dateTmA + "   Time: 7-8pm");
      };
      if(tomorrowEightNinePmA === true) {
        whenA.push("Date: " + dateTmA + "   Time: 8-9pm");
      };
      if(tomorrowNineTenPmA === true) {
        whenA.push("Date: " + dateTmA + "   Time: 9-10pm");
      };
      if(dayAfterEightNineA === true) {
        whenA.push("Date: " + dateDaA + "   Time: 8-9");
      };
      if(dayAfterNineTenA === true) {
        whenA.push("Date: " + dateDaA + "   Time: 9-10");
      };
      if(dayAfterTenElevenA === true) {
        whenA.push("Date: " + dateDaA + "   Time: 10-11");
      };
      if(dayAfterElevenNoonA === true) {
        whenA.push("Date: " + dateDaA + "   Time: 11-12");
      };
      if(dayAfterNoonOnePmA === true) {
        whenA.push("Date: " + dateDaA + "   Time: 12-1pm");
      };
      if(dayAfterOneTwoPmA === true) {
        whenA.push("Date: " + dateDaA + "   Time: 1-2pm");
      };
      if(dayAfterTwoThreePmA === true) {
        whenA.push("Date: " + dateDaA + "   Time: 2-3");
      };
      if(dayAfterThreeFourPmA === true) {
        whenA.push("Date: " + dateDaA + "   Time: 3-4pm");
      };
      if(dayAfterFourFivePmA === true) {
        whenA.push("Date: " + dateDaA + "   Time: 4-5pm");
      };
      if(dayAfterFiveSixPmA === true) {
        whenA.push("Date: " + dateDaA + "   Time: 5-6pm");
      };
      if(dayAfterSixSevenPmA === true) {
        whenA.push("Date: " + dateDaA + "   Time: 6-7pm");
      };
      if(dayAfterSevenEightPmA === true) {
        whenA.push("Date: " + dateDaA + "   Time: 7-8pm");
      };
      if(dayAfterEightNinePmA === true) {
        whenA.push("Date: " + dateDaA + "   Time: 8-9pm");
      };
      if(dayAfterNineTenPmA === true) {
        whenA.push("Date: " + dateDaA + "   Time: 9-10pm");
      };

    Meteor.call('insertAsk', destTextA, userA, durTextA, dolTextA, whenA);

    Router.go('/displayasks');

   }
 });

Template.offers.events({
 'submit form':function(event) {
   event.preventDefault();
   var userO = Meteor.userId();
   var destBarO = $('#destO').find(":selected");
   var destTextO = destBarO.text();
   var durBarO = $('#durO').find(":selected");
   var durTextO = durBarO.text();
   var dolBarO = $('#dolO').find(":selected");
   var dolTextO = dolBarO.text();
     var todayEightNineO = $('#td1O').val();
     var todayNineTenO = $('#td2O').val();
     var todayTenElevenO = $('#td3O').val();
     var todayElevenNoonO = $('#td4O').val();
     var todayNoonOnePmO = $('#td5O').val();
     var todayOneTwoPmO = $('#td6O').val();
     var todayTwoThreePmO = $('#td7O').val();
     var todayThreeFourPmO = $('#td8O').val();
     var todayFourFivePmO = $('#td9O').val();
     var todayFiveSixPmO = $('#td10O').val();
     var todaySixSevenPmO = $('#td11').val();
     var todaySevenEightPmO = $('#td12O').val();
     var todayEightNinePmO = $('#td13O').val();
     var todayNineTenPmO = $('#td14O').val();
     var tomorrowEightNineO = $('#tm1O').val();
     var tomorrowNineTenO = $('#tm2O').val();
     var tomorrowTenElevenO = $('#tm3O').val();
     var tomorrowElevenNoonO = $('#tm4O').val();
     var tomorrowNoonOnePmO = $('#tm5O').val();
     var tomorrowOneTwoPmO = $('#tm6O').val();
     var tomorrowTwoThreePmO = $('#tm7O').val();
     var tomorrowThreeFourPmO = $('#tm8O').val();
     var tomorrowFourFivePmO = $('#tm9O').val();
     var tomorrowFiveSixPmO = $('#tm10O').val();
     var tomorrowSixSevenPmO = $('#tm11O').val();
     var tomorrowSevenEightPmO = $('#tm12O').val();
     var tomorrowEightNinePmO = $('#tm13O').val();
     var tomorrowNineTenPmO = $('#tm14O').val();
     var dayAfterEightNineO = $('#da1O').val();
     var dayAfterNineTenO = $('#da2O').val();
     var dayAfterTenElevenO = $('#da3O').val();
     var dayAfterElevenNoonO = $('#daO').val();
     var dayAfterNoonOnePmO = $('#da5O').val();
     var dayAfterOneTwoPmO = $('#da6O').val();
     var dayAfterTwoThreePmO = $('#da7O').val();
     var dayAfterThreeFourPmO = $('#da8O').val();
     var dayAfterFourFivePmO = $('#da9O').val();
     var dayAfterFiveSixPmO = $('#da10O').val();
     var dayAfterSixSevenPmO = $('#da11O').val();
     var dayAfterSevenEightPmO = $('#da12O').val();
     var dayAfterEightNinePmO = $('#da13O').val();
     var dayAfterNineTenPmO = $('#da14O').val();
     var dayO = new Date(Date.now());
     var dateO = dayO.getDate();
     var dateTmO = dateO + 1;
     var dateDaO = dateO + 2;
     var whenO = [];
     if(todayEightNineO === true) {
       whenO.push("Date: " + dateO + "   Time: 8-9");
     };
     if(todayNineTenO === true) {
       whenO.push("Date: " + dateO + "   Time: 9-10");
     };
     if(todayTenElevenO === true) {
       whenO.push("Date: " + dateO + "   Time: 10-11");
     };
     if(todayElevenNoonO === true) {
       whenO.push("Date: " + dateO + "   Time: 11-12");
     };
     if(todayNoonOnePmO === true) {
       whenO.push("Date: " + dateO + "   Time: 12-1pm");
     };
     if(todayOneTwoPmO === true) {
       whenO.push("Date: " + dateO + "   Time: 1-2pm");
     };
     if(todayTwoThreePmO === true) {
       whenO.push("Date: " + dateO + "   Time: 2-3");
     };
     if(todayThreeFourPmO === true) {
       whenO.push("Date: " + dateO + "   Time: 3-4pm");
     };
     if(todayFourFivePmO === true) {
       whenO.push("Date: " + dateO + "   Time: 4-5pm");
     };
     if(todayFiveSixPmO === true) {
       whenO.push("Date:" + dateO + "   Time: 5-6pm");
     };
     if(todaySixSevenPmO === true) {
       whenO.push("Date: " + dateO + "   Time: 6-7pm");
     };
     if(todaySevenEightPmO === true) {
       whenO.push("Date: " + dateO + "   Time: 7-8pm");
     };
     if(todayEightNinePmO === true) {
       whenO.push("Date: " + dateO + "   Time: 8-9pm");
     };
     if(todayNineTenPmO === true) {
       whenO.push("Date: " + dateO + "   Time: 9-10pm");
     };
     if(tomorrowEightNineO === true) {
       whenO.push("Date: " + dateTmO + "   Time: 8-9");
     };
     if(tomorrowNineTenO === true) {
       whenO.push("Date: " + dateTmO + "   Time: 9-10");
     };
     if(tomorrowTenElevenO === true) {
       whenO.push("Date: " + dateTmO + "   Time: 10-11");
     };
     if(tomorrowElevenNoonO === true) {
       whenO.push("Date: " + dateTmO + "   Time: 11-12");
     };
     if(tomorrowNoonOnePmO === true) {
       whenO.push("Date: " + dateTmO + "   Time: 12-1pm");
     };
     if(tomorrowOneTwoPmO === true) {
       whenO.push("Date: " + dateTmO + "   Time: 1-2pm");
     };
     if(tomorrowTwoThreePmO === true) {
       whenO.push("Date: " + dateTmO + "   Time: 2-3");
     };
     if(tomorrowThreeFourPmO === true) {
       whenO.push("Date: " + dateTmO + "   Time: 3-4pm");
     };
     if(tomorrowFourFivePmO === true) {
       whenO.push("Date: " + dateTmO + "   Time: 4-5pm");
     };
     if(tomorrowFiveSixPmO === true) {
       whenO.push("Date: " + dateTmO + "   Time: 5-6pm");
     };
     if(tomorrowSixSevenPmO === true) {
       whenO.push("Date: " + dateTmO + "   Time: 6-7pm");
     };
     if(tomorrowSevenEightPmO === true) {
       whenO.push("Date: " + dateTmO + "   Time: 7-8pm");
     };
     if(tomorrowEightNinePmO === true) {
       whenO.push("Date: " + dateTmO + "   Time: 8-9pm");
     };
     if(tomorrowNineTenPmO === true) {
       whenO.push("Date: " + dateTmO + "   Time: 9-10pm");
     };
     if(dayAfterEightNineO === true) {
       whenO.push("Date: " + dateDaO + "   Time: 8-9");
     };
     if(dayAfterNineTenO === true) {
       whenO.push("Date: " + dateDaO + "   Time: 9-10");
     };
     if(dayAfterTenElevenO === true) {
       whenO.push("Date: " + dateDaO + "   Time: 10-11");
     };
     if(dayAfterElevenNoonO === true) {
       whenO.push("Date: " + dateDaO + "   Time: 11-12");
     };
     if(dayAfterNoonOnePmO === true) {
       whenO.push("Date: " + dateDaO + "   Time: 12-1pm");
     };
     if(dayAfterOneTwoPmO === true) {
       whenO.push("Date: " + dateDaO + "   Time: 1-2pm");
     };
     if(dayAfterTwoThreePmO === true) {
       whenO.push("Date: " + dateDaO + "   Time: 2-3");
     };
     if(dayAfterThreeFourPmO === true) {
       whenO.push("Date: " + dateDaO + "   Time: 3-4pm");
     };
     if(dayAfterFourFivePmO === true) {
       whenO.push("Date: " + dateDaO + "   Time: 4-5pm");
     };
     if(dayAfterFiveSixPmO === true) {
       whenO.push("Date: " + dateDaO + "   Time: 5-6pm");
     };
     if(dayAfterSixSevenPmO === true) {
       whenO.push("Date: " + dateDaO + "   Time: 6-7pm");
     };
     if(dayAfterSevenEightPmO === true) {
       whenO.push("Date: " + dateDaO + "   Time: 7-8pm");
     };
     if(dayAfterEightNinePmO === true) {
       whenO.push("Date: " + dateDaO + "   Time: 8-9pm");
     };
     if(dayAfterNineTenPmO === true) {
       whenO.push("Date: " + dateDaO + "   Time: 9-10pm");
     };

   Meteor.call('insertOffer', destTextO, userO, durTextO, dolTextO, whenO);

   Router.go('/');

  }
});
