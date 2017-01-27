var assert = require('assert');
var run = require('./run.js');

describe('database', function() {
    it('checks to see if files already exist by ID', function() {
        var output = run(['../lib/index-dir.js, {"property":"fuck windows","_id":"WREG79B5EM8"}]);
        assert.equal(output, 'hello marty\n');
    });