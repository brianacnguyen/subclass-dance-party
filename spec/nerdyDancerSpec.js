describe("nerdyDancer", function() {

  var nerdyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    nerdyDancer = new makeNerdyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(nerdyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(nerdyDancer.$node, 'toggle');
    nerdyDancer.step();
    expect(nerdyDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(nerdyDancer, "step");
      expect(nerdyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(nerdyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(nerdyDancer.step.callCount).to.be.equal(2);
    });
  });
});
