var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
};
var Dwight = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, (timeBetweenSteps / 5));
  this.$node.addClass('coolDancer');
  this.$node.prepend('<img src="src/dwight.jpg" height="50" width="50"/>')
};

Dwight.prototype = Object.create(makeDancer.prototype);

Dwight.prototype.constructor = Dwight;

Dwight.prototype.step = function(){
	makeDancer.prototype.step.call(this); 
	rotation += 25; 
	this.$node.rotate(rotation); 
};
