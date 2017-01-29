var assert = require('assert');
var run = require('./run.js');
var DB = require('../lib/index-dir');

describe('database', function() {
  var db = DB.create('../data');
  it('checks to see if files already exist by ID', function() {
    db.save('test2.txt', {"property":"fuck windows","_id":"WREG79B5EM8"}, function(error) {
      assert.deepEqual(error, {"error": "this file already exists!"});
    });
  });
  it('checks to see if new files save to database', function() {
    var doesItSave = db.save('test3.txt', {"name":"lolCat", "hasCheeseBurger?":"true", "isCute?":"yes"});
  });
});

//does it save is not a valid test as far as i can tell

