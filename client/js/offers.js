Template.asks.events({
  'submit form':function(event) {
    event.preventDefault();
    var destBarA = $('#destA').find(":selected");
    var destTextA = destBarA.text();
    var durBarA = $('#durA').find(":selected");
    var durTextA = durBarA.text();
    var dolBarA = $('#dolA').find(":selected");
    var dolTextA = dolBarA.text();
      var todayEightNineA = $('#td1A').val();
      var todayNineTenA = $('#td2A').val();
      var todayTenElevenA = $('#td3A').val();
      var todayElevenNoonA = $('#td4A').val();
      var todayNoonOnePmA = $('#td5A').val();
      var todayOneTwoPmA = $('#td6A').val();
      var todayTwoThreePmA = $('#td7A').val();
      var todayThreeFourPmA = $('#td8A').val();
      var todayFourFivePmA = $('#td9A').val();
      var todayFiveSixPmA = $('#td10A').val();
      var todaySixSevenPmA = $('#td11A').val();
      var todaySevenEightPmA = $('#td12A').val();
      var todayEightNinePmA = $('#td13A').val();
      var todayNineTenPmA = $('#td14A').val();
      var tomorrowEightNineA = $('#tm1A').val();
      var tomorrowNineTenA = $('#tm2A').val();
      var tomorrowTenElevenA = $('#tm3A').val();
      var tomorrowElevenNoonA = $('#tm4A').val();
      var tomorrowNoonOnePmA = $('#tm5A').val();
      var tomorrowOneTwoPmA = $('#tm6A').val();
      var tomorrowTwoThreePmA = $('#tm7A').val();
      var tomorrowThreeFourPmA = $('#tm8A').val();
      var tomorrowFourFivePmA = $('#tm9A').val();
      var tomorrowFiveSixPmA = $('#tm10A').val();
      var tomorrowSixSevenPmA = $('#tm11A').val();
      var tomorrowSevenEightPmA = $('#tm12A').val();
      var tomorrowEightNinePmA = $('#tm13A').val();
      var tomorrowNineTenPmA = $('#tm14A').val();
      var dayAfterEightNineA = $('#da1A').val();
      var dayAfterNineTenA = $('#da2A').val();
      var dayAfterTenElevenA = $('#da3A').val();
      var dayAfterElevenNoonA = $('#da4A').val();
      var dayAfterNoonOnePmA = $('#da5A').val();
      var dayAfterOneTwoPmA = $('#da6A').val();
      var dayAfterTwoThreePmA = $('#da7A').val();
      var dayAfterThreeFourPmA = $('#da8A').val();
      var dayAfterFourFivePmA = $('#da9A').val();
      var dayAfterFiveSixPmA = $('#da10A').val();
      var dayAfterSixSevenPmA = $('#da11A').val();
      var dayAfterSevenEightPmA = $('#da12A').val();
      var dayAfterEightNinePmA = $('#da13A').val();
      var dayAfterNineTenPmA = $('#da14A').val();
    var dateA = new Date(Date.now());
    var dateTmA = new Date(Date.now() + 1);
    var dateDaA = new Date(Date.now() + 2);
    var whenA = [];
      if(todayEightNineA === true) {
        when.push(dateA + "8-9");
      };
      if(todayNineTenA === true) {
        when.push(dateA + "9-10");
      };
      if(todayTenElevenA === true) {
        when.push(dateA + "10-11");
      };
      if(todayElevenNoonA === true) {
        when.push(dateA + "11-12");
      };
      if(todayNoonOnePmA === true) {
        when.push(dateA + "12-1pm");
      };
      if(todayOneTwoPmA === true) {
        when.push(dateA + "1-2pm");
      };
      if(todayTwoThreePmA === true) {
        when.push(dateA + "2-3");
      };
      if(todayThreeFourPmA === true) {
        when.push(dateA + "3-4pm");
      };
      if(todayFourFivePmA === true) {
        when.push(dateA + "4-5pm");
      };
      if(todayFiveSixPmA === true) {
        when.push(dateA + "5-6pm");
      };
      if(todaySixSevenPmA === true) {
        when.push(dateA + "6-7pm");
      };
      if(todaySevenEightPmA === true) {
        when.push(dateA + "7-8pm");
      };
      if(todayEightNinePmA === true) {
        when.push(dateA + "8-9pm");
      };
      if(todayNineTenPmA === true) {
        when.push(dateA + "9-10pm");
      };
      if(tomorrowEightNineA === true) {
        when.push(dateTmA + "8-9");
      };
      if(tomorrowNineTenA === true) {
        when.push(dateTmA + "9-10");
      };
      if(tomorrowTenElevenA === true) {
        when.push(dateTmA + "10-11");
      };
      if(tomorrowElevenNoonA === true) {
        when.push(dateTmA + "11-12");
      };
      if(tomorrowNoonOnePmA === true) {
        when.push(dateTmA + "12-1pm");
      };
      if(tomorrowOneTwoPmA === true) {
        when.push(dateTmA + "1-2pm");
      };
      if(tomorrowTwoThreePmA === true) {
        when.push(dateTmA + "2-3");
      };
      if(tomorrowThreeFourPmA === true) {
        when.push(dateTmA + "3-4pm");
      };
      if(tomorrowFourFivePmA === true) {
        when.push(dateTmA + "4-5pm");
      };
      if(tomorrowFiveSixPmA === true) {
        when.push(dateTmA + "5-6pm");
      };
      if(tomorrowSixSevenPmA === true) {
        when.push(dateTmA + "6-7pm");
      };
      if(tomorrowSevenEightPmA === true) {
        when.push(dateTmA + "7-8pm");
      };
      if(tomorrowEightNinePmA === true) {
        when.push(dateTmA + "8-9pm");
      };
      if(tomorrowNineTenPmA === true) {
        when.push(dateTmA + "9-10pm");
      };
      if(dayAfterEightNineA === true) {
        when.push(dateDaA + "8-9");
      };
      if(dayAfterNineTenA === true) {
        when.push(dateDaA + "9-10");
      };
      if(dayAfterTenElevenA === true) {
        when.push(dateDaA + "10-11");
      };
      if(dayAfterElevenNoonA === true) {
        when.push(dateDaA + "11-12");
      };
      if(dayAfterNoonOnePmA === true) {
        when.push(dateDaA + "12-1pm");
      };
      if(dayAfterOneTwoPmA === true) {
        when.push(dateDaA + "1-2pm");
      };
      if(dayAfterTwoThreePmA === true) {
        when.push(dateDaA + "2-3");
      };
      if(dayAfterThreeFourPmA === true) {
        when.push(dateDaA + "3-4pm");
      };
      if(dayAfterFourFivePmA === true) {
        when.push(dateDaA + "4-5pm");
      };
      if(dayAfterFiveSixPmA === true) {
        when.push(dateDaA + "5-6pm");
      };
      if(dayAfterSixSevenPmA === true) {
        when.push(dateDaA + "6-7pm");
      };
      if(dayAfterSevenEightPmA === true) {
        when.push(dateDaA + "7-8pm");
      };
      if(dayAfterEightNinePmA === true) {
        when.push(dateDaA + "8-9pm");
      };
      if(dayAfterNineTenPmA === true) {
        when.push(dateDaA + "9-10pm");
      };

    Asks.insert({destination: destTextA, name: user, duration: durTextA, dollar: doltextA, time: whenA});

   }
 });

Template.offers.events({
 'submit form':function(event) {
   event.preventDefault();
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
   var dateO = new Date(Date.now());
   var dateTmO = new Date(Date.now() + 1);
   var dateTmO = new Date(Date.now() + 2);
   var whenO = [];
     if(todayEightNineO === true) {
       when.push(dateO + "8-9");
     };
     if(todayNineTenO === true) {
       when.push(dateO + "9-10");
     };
     if(todayTenElevenO === true) {
       when.push(dateO + "10-11");
     };
     if(todayElevenNoonO === true) {
       when.push(dateO + "11-12");
     };
     if(todayNoonOnePmO === true) {
       when.push(dateO + "12-1pm");
     };
     if(todayOneTwoPmO === true) {
       when.push(dateO + "1-2pm");
     };
     if(todayTwoThreePmO === true) {
       when.push(dateO + "2-3");
     };
     if(todayThreeFourPmO === true) {
       when.push(dateO + "3-4pm");
     };
     if(todayFourFivePmO === true) {
       when.push(dateO + "4-5pm");
     };
     if(todayFiveSixPmO === true) {
       when.push(dateO + "5-6pm");
     };
     if(todaySixSevenPmO === true) {
       when.push(dateO + "6-7pm");
     };
     if(todaySevenEightPmO === true) {
       when.push(dateO + "7-8pm");
     };
     if(todayEightNinePmO === true) {
       when.push(dateO + "8-9pm");
     };
     if(todayNineTenPmO === true) {
       when.push(dateO + "9-10pm");
     };
     if(tomorrowEightNineO === true) {
       when.push(dateTmO + "8-9");
     };
     if(tomorrowNineTenO === true) {
       when.push(dateTmO + "9-10");
     };
     if(tomorrowTenElevenO === true) {
       when.push(dateTmO + "10-11");
     };
     if(tomorrowElevenNoonO === true) {
       when.push(dateTmO + "11-12");
     };
     if(tomorrowNoonOnePmO === true) {
       when.push(dateTmO + "12-1pm");
     };
     if(tomorrowOneTwoPmO === true) {
       when.push(dateTmO + "1-2pm");
     };
     if(tomorrowTwoThreePmO === true) {
       when.push(dateTmO + "2-3");
     };
     if(tomorrowThreeFourPmO === true) {
       when.push(dateTmO + "3-4pm");
     };
     if(tomorrowFourFivePmO === true) {
       when.push(dateTmO + "4-5pm");
     };
     if(tomorrowFiveSixPmO === true) {
       when.push(dateTmO + "5-6pm");
     };
     if(tomorrowSixSevenPmO === true) {
       when.push(dateTmO + "6-7pm");
     };
     if(tomorrowSevenEightPmO === true) {
       when.push(dateTmO + "7-8pm");
     };
     if(tomorrowEightNinePmO === true) {
       when.push(dateTmO + "8-9pm");
     };
     if(tomorrowNineTenPmO === true) {
       when.push(dateTmO + "9-10pm");
     };
     if(dayAfterEightNineO === true) {
       when.push(dateDaO + "8-9");
     };
     if(dayAfterNineTenO === true) {
       when.push(dateDaO + "9-10");
     };
     if(dayAfterTenElevenO === true) {
       when.push(dateDaO + "10-11");
     };
     if(dayAfterElevenNoonO === true) {
       when.push(dateDaO + "11-12");
     };
     if(dayAfterNoonOnePmO === true) {
       when.push(dateDaO + "12-1pm");
     };
     if(dayAfterOneTwoPmO === true) {
       when.push(dateDaO + "1-2pm");
     };
     if(dayAfterTwoThreePmO === true) {
       when.push(dateDaO + "2-3");
     };
     if(dayAfterThreeFourPmO === true) {
       when.push(dateDaO + "3-4pm");
     };
     if(dayAfterFourFivePmO === true) {
       when.push(dateDaO + "4-5pm");
     };
     if(dayAfterFiveSixPmO === true) {
       when.push(dateDaO + "5-6pm");
     };
     if(dayAfterSixSevenPmO === true) {
       when.push(dateDaO + "6-7pm");
     };
     if(dayAfterSevenEightPmO === true) {
       when.push(dateDaO + "7-8pm");
     };
     if(dayAfterEightNinePmO === true) {
       when.push(dateDaO + "8-9pm");
     };
     if(dayAfterNineTenPmO === true) {
       when.push(dateDaO + "9-10pm");
     };

   Offers.insert({destination: destTextO, name: user, duration: durTextO, dollar: doltextO, time: whenO});

  }
});