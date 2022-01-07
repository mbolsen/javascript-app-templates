//This website has the coverage reports  https://coveralls.io/github/mbolsen/javascript-app-templates
const assert = require('assert');
const sinon = require('sinon');
require('mocha-sinon');

//Chai
const chai = require('chai');
const expect = chai.expect;

describe('Sample Test', function () {
  
  //test to see if console.logs are in the code
  //Inspiration was received from https://stackoverflow.com/questions/30625404/how-to-unit-test-console-output-with-mocha-on-nodejs
  beforeEach(function () {
    //test to see if you have any console logs before pushing
    this.sinon.stub(console, 'log');
  })
  
  afterEach(function () {
    expect( console.log.called ).to.be.false;
  })
  
  describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return -1 when the value is not present', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
      })
    })
  });
})