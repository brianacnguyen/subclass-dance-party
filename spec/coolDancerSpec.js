describe("coolDancer", function() {

  var coolDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    coolDancer = new makeCoolDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(coolDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(coolDancer.$node, 'toggle');
    coolDancer.step();
    expect(coolDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(coolDancer, "step");
      expect(coolDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(coolDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(coolDancer.step.callCount).to.be.equal(2);
    });
  });
});
