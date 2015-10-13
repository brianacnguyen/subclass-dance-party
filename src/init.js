$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
    // changeInteractions();
    // var changeInteractions = function(){  
    var notPartnered = windows.dancers.slice();
    var partnered = [];
    // var z = notPartnered.length;
    windows.dancers.forEach(function(dancer){
      if (partnered.indexOf(dancer) >= 0) { return; }
      // if (dancer return; )
      var top = dancer.top;
      var left = dancer.left;
      for (var i = 0; i < notPartnered.length; i++) {
        var newDancer = notPartnered[i];
        if (newDancer === dancer) {continue; }
        var topTest = ((Math.abs(newDancer.top - top)) <= 200);
        var leftTest = ((Math.abs(newDancer.left - left)) <= 200);
        if (topTest && leftTest) {
          partnered.push([dancer,newDancer]);
          var dancerIndex = notPartnered.indexOf(dancer);
          notpartnered.splice(dancerIndex,1);
          var newDancerIndex = notPartnered.indexOf(newDancer);
          notPartnered.splice(newDancerIndex,1);
          break;
        }
      }
    });

    partnered.forEach()
            // var middleTop = ((newDancer.top + top) / 2);
        // var middleLeft = ((newDancer.left + left) /2);
//setInterval(function(){
          //   dancer.$node.stop(true,true).animate({left: middleLeft, top: middleTop}, 1000, 
          //     function(){ $(this).stop(true,true).animate({left: left, top: top}, 1000); 
          //   });
          // }, 2000);


        // dancer.top     .animate({ top: newDancer.top }, 500)
        // dancer.left

        // find all dancers where dancer.top || dancer.left within 15px
          // check actualDistance
            // 
      // })
    // }
  });

  $(".lineUpButton").on("click", function(event){
    window.dancers.forEach(function(dancer){
      dancer.lineUp();
    });
  });
});

