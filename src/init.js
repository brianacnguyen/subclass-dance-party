var areClose = function (dancer1, dancer2) {
  var topTest = ((Math.abs(dancer1.top - dancer2.top)) <= 200);
  var leftTest = ((Math.abs(dancer1.left - dancer2.left)) <= 200);
  return topTest && leftTest;
};

var pairDancers = function(pair, middleLeft, middleTop) {
  pair.forEach(function(dancer) {
    setInterval(function() {
      dancer.$node.animate({ left: middleLeft, top: middleTop },
        1000,
        function(){
          $(this).animate({
            left: dancer.left, 
            top: dancer.top
          }, 1000); 
        });
    }, 2000);
  });
};

$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
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

    if (!(dancer instanceof AwkwardGuy)) {
      window.dancers.push(dancer);
    };
    $('body').append(dancer.$node);

    var notPartnered = window.dancers.slice();
    var partnered = [];

    window.dancers.forEach(function(dancer){
      if (notPartnered.indexOf(dancer) === -1) {
        return;
      }

      for (var i = 0; i < notPartnered.length; i++) {
        var newDancer = notPartnered[i];
        if (newDancer === dancer) {
          continue;
        }

        if (areClose(dancer, newDancer)) {  
          partnered.push([dancer,newDancer]);
          notPartnered.splice(notPartnered.indexOf(dancer), 1);
          notPartnered.splice(notPartnered.indexOf(newDancer), 1);
          break;
        }
      }
    });

    partnered.forEach(function(pair) {
      var middleTop = ((pair[0].top + pair[1].top) / 2); 
      var middleLeft = ((pair[1].left + pair[1].left) / 2);
      var test1 = (pair[0] instanceof Dwight) && (pair[1] instanceof Jim);
      var test2 = (pair[0] instanceof Jim) && (pair[1] instanceof Dwight);
      if (test1 || test2) {
        pair.forEach(function(dancer) {
          dancer.$node.animate({left: middleLeft, top:middleTop} ,2000 ,
            function() {
              dancer.$node.toggle("explode");
          });
        });
      } else {
        pairDancers(pair, middleLeft, middleTop);
      }
    });
  });

  $("body").on("mouseenter", ".nerdyDancer", function(event){
    $(this).animate({left: "-=20px", top : "-=20px"},100);
  });

  $(".lineUpButton").on("click", function(event){
    window.dancers.forEach(function(dancer){
      dancer.lineUp();
    });
  });
  $("#mute").on("click" , function(event) {
    $(this).closest("audio").prepend("mute");
  })
});
