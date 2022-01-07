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
describe('MySQL Tests', function () {
  
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
  
  describe('MySQL', function () {
    describe('REAL connection tests', function () {
      //be careful with these, because if you have a live database, then you could be messing with your live data.
      //this is why it is better to mock the tests
      it ('should connect to the MySQL database', function (done) {
        dbConnection.connect(function (err, result) {
          if (err) {
            done(err);
            return;
          } 
          expect(result.config.database).to.equal('chat');
          dbConnection.connect(done)
        })
      })
  
      // it('should not connect to the MySQL database if given wrong credentials', function (done) {
      //   //this doesn't quit work.  We need to call the db index file
      //   const dbConnection = mysql.createConnection({
      //     host: 'localhost',
      //     user: 'username',
      //     password: 'strongpassword',
      //     database: 'chat',
      //   });
      //   expect(dbConnection.connect()
      //     // function (err, result) {
      //     // if (err) {
      //     //   done(err);
      //     //   // return;
      //     // }
      //     // expect(result.config.database).to.equal('chat');
      //   ).to.throw(new Error())
      // })
  
    //These tests will use the mocking of sinon
    //I am starting to think that mocking the DB is not the best practice.
    //Create a 'test' db, which can actually do CRUD operations
  
    //The code below does not work - I switched to emphasizing testing the real db
    // describe('MOCK MySQL Connection tests', function () {
    //   //mocking is better than using the real database, because you won't 'mess' with real data
    //   it('Should mock putting some data in', function () {
    //     mock.expects('createConnection').returns({
    //       connect: () => {
    //         console.log('Connected to MySQL Database')
    //       },
    //       query: (query, vars, callback) => {
    //         callback(null, successfulDBinsert);
    //       },
    //       end: () => {
    //         console.log('Connection ended');
    //       }
    //     })
    //     mock.verify();
    //     // mock.expects('query').with('SELECT name FROM users;').yields(null, rows);
    //     mock.restore();
    //     done();
      // })
    })
  })
})