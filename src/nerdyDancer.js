var makeNerdyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps); 
  this.$node.addClass('nerdyDancer');
  this.$node.prepend('<img src="src/expressionless.png" height="20" width="20"/>')
};
makeNerdyDancer.prototype = Object.create(makeDancer.prototype);

makeNerdyDancer.prototype.constructor = makeNerdyDancer;

makeNerdyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this); 
  // this.$node.toggle();
};
