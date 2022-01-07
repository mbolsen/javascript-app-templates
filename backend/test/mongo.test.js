//This website has the coverage reports  https://coveralls.io/github/mbolsen/javascript-app-templates
const assert = require('assert');
const sinon = require('sinon');
require('mocha-sinon');
// const { db } = require('../database/mongo');
//MySQL
const dbConnection = require('../database/mysql');
// const mock = sinon.mock(require('mysql2'))
var mysql = require('mysql2');
//Chai
const chai = require('chai');
const expect = chai.expect;
const { resolve } = require('path');
const { connection } = require('mongoose');

//test to see if console.logs are in the code
//Inspiration was received from https://stackoverflow.com/questions/30625404/how-to-unit-test-console-output-with-mocha-on-nodejs
describe('Mongo Tests', function () {
  
  // beforeEach(function () {
  //   //test to see if you have any console logs before pushing
  //   this.sinon.stub(console, 'log');
  // })
  
  // afterEach(function () {
  //   expect( console.log.called ).to.be.false;
  // })
  
  //MONGO - look at example on https://stackabuse.com/testing-node-js-code-with-mocha-and-chai/
  // describe('Mongo', function () {
  //   it ('should connect to the database', function () {
  //     db.connection.connect(function (err, result) {
  //       if (err) {
  //         done(err);
  //         return;
  //       } 
  //       expect(result).to.equal('Connected to MySQL Database');
  //       done();
  //     })
  //   })
  // })
})