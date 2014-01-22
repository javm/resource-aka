var should = require('should');
var Set = require('../lib/set').Set;
var e = 'skill';
var s = new Set();
s.addMember(e);
var t = new Set();
t.addMember('ability');
t.addMember('talent');

describe('Set', function() {
	describe('isMember', function() {
		it('should return if element is member of s', function() {
			(s.isMember(e)).should.equal(1);
		})
	})
	describe('union', function(){
		it('should return the union of two sets', function(){
			var x = new Set();
			var y = x.union(s, t);
			console.log(y);
			(y.isMember('talent')).should.equal(1);
		})
	})
});
