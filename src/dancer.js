// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
};

makeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    if (top === undefined || top === null){
      top = this.top;
    }
    if (left === undefined || left === null){
      left = this.left;
    }
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(){
  this.setPosition(null, 0);
};
