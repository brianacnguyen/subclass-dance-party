var makeCoolDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeCoolDancer.prototype = Object.create(makeDancer.prototype);

makeCoolDancer.prototype.constructor = makeCoolDancer;

makeCoolDancer.prototype.step = function(){
	makeDancer.prototype.step.call(this);
	this.$node.toggle();
};
