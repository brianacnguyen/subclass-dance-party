var rotation = 0;
var Angela = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, (timeBetweenSteps/5));
  this.$node.addClass('blinkyDancer');
  this.$node.prepend('<img src="src/angela.jpg" height="50" width="50"/>')
};
Angela.prototype = Object.create(makeDancer.prototype);

Angela.prototype.constructor = Angela;

Angela.prototype.step = function(){
	makeDancer.prototype.step.call(this); 
	rotation -= 25; 
	this.$node.rotate(rotation); 
};
