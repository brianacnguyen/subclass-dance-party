var rotation = 0;

var Jim = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, (timeBetweenSteps / 5));
  this.$node.addClass('coolDancer');
  this.$node.prepend('<img src="src/jim.jpg" height="50" width="50"/>')
};

Jim.prototype = Object.create(makeDancer.prototype);

Jim.prototype.constructor = Jim;

Jim.prototype.step = function(){
  makeDancer.prototype.step.call(this); 
  rotation += 25; 
  this.$node.rotate(rotation); 
};
