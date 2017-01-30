var assert = require('assert');
var run = require('./run.js');
var DB = require('../lib/get-dir-contents');

describe('get directory contents', function(){
  it('gets file contents by id', function(done) {
    var dataBase = DB.create('./data'); 
    dataBase.getDirContentsById('sloths.txt', "KJEA79B939D", (err, result) => {
      if(err) return done(err);
      assert.equal(result._id, "KJEA79B939D");
      done();
    });
  });
});

//the above test needs to see if we can return a database object by id number; 
//second test: if id does not exists returns null

