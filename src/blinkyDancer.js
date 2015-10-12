var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this);
  this.timeBetweenSteps = timeBetweenSteps; 
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function(){
  // FIXME Refactor
  var context = this;
  setTimeout(context.step.bind(this), context.timeBetweenSteps);
  this.$node.toggle();
};
