var makeNerdyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps); 
  this.$node.addClass('nerdyDancer');
};
makeNerdyDancer.prototype = Object.create(makeDancer.prototype);

makeNerdyDancer.prototype.constructor = makeNerdyDancer;

makeNerdyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this); 
  this.$node.toggle();
};
