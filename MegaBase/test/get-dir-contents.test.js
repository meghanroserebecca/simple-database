var assert = require('assert');
var run = require('./run.js');
var DB = require('../lib/get-dir-contents');

describe('get directory contents', function(){
  it('gets file contents by id', function(done) {
    var cuteAnimals = DB.create('data'); 
    cuteAnimals.getDirContentsById('sloths.txt', "KJEA79B939D", (err, obj) => {
      if(err) return done(err);
      assert.equal(obj._id, "KJEA79B939D");
      done();
    });
  });
});

//the above test is not functioning; mocha is returning Uncaught AssertionError: undefined == 'KJEA79B939D'

