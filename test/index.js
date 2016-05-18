var expect = require('chai').expect,
    test = require('..');

describe('test', function() {
  it('should say hello', function(done) {
    expect(test()).to.equal('Hello, world');
    done();
  });
});
