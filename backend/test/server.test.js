const axios = require('axios');

//Chai
const chai = require('chai');
const expect = chai.expect;

const app = require('../server/')

//test to see if console.logs are in the code
//Inspiration was received from https://stackoverflow.com/questions/30625404/how-to-unit-test-console-output-with-mocha-on-nodejs
// beforeEach(function () {
//   //test to see if you have any console logs before pushing
//   this.sinon.stub(console, 'log');
// })

// afterEach(function () {
//   expect( console.log.called ).to.be.false;
// })

describe('Server Testing', function () {
  describe('Server is listening', function () {
    //the server needs to be running
    // it('should be listening', function () {
    //   expect(console.log.calledOnce).to.be.true;
    // })
  })

  describe('Server Routes', function () {
    it('random GET route should return a html document', async function () {
      const response = await axios({
        url: process.env.SERVER_URL + '/cats',
        method: 'get'
      })
      expect(response).to.be.a('object');
      expect(response.status).to.equal(200);
      //we can put the exact html file here, but this will test that it is sending an html file
      expect(response.data).to.contain('<!DOCTYPE html>');
    })
  })
})