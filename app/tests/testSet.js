var should = require('should');
var Set = require('../lib/set').Set;
var e = 'skill';
var s = new Set();
s.addMember(e);
describe('Set', function(){
    describe('isMember', function(){
	it('should return if element is member of s', function(){
	    (s.isMember(e)).should.equal(1);
	})
    })
});
