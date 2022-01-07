const assert = require('assert');
const sinon = require('sinon');
// const { db } = require('../database/mongo');
//MySQL
const dbConnection = require('../database/mysql');
const mock = sinon.mock(require('mysql2'))
//Chai
const chai = require('chai');
const { resolve } = require('path');
const { connection } = require('mongoose');
const expect = chai.expect;


describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    })
  })
});

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
        // resolve('done');
        dbConnection.connect(done)
      })
    })
  })

  //These tests will use the mocking of sinon
  describe('MOCK MySQL Connection tests', function () {
    //mocking is better than using the real database, because you won't 'mess' with real data
    it('Should mock putting some data in', function () {
      mock.expects('createConnection').returns({
        connect: () => {
          console.log('Connected to MySQL Database')
        },
        query: (query, vars, callback) => {
          callback(null, successfulDBinsert);
        },
        end: () => {
          console.log('Connection ended');
        }
      })
      mock.verify();
      mock.expects('query').with('SELECT name FROM users;').yields(null, rows);
      mock.restore();
      done();
    })
  })
})