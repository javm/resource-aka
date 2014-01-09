var should = require('should');
var Aka = require('../aka').Aka;
var Set = require('../lib/set').Set;

//It initialize one term as a set
var terms = [];
var zip_code = {
	'name' : 'zip code',
	'members' : ['zip code', 'postal code']
};
var price = {
	'name' : 'price',
	'members' : ['price', 'cost', 'charge', 'fee']
};
var terms = [zip_code, price]
var akaObj = new Aka(terms);

//console.log(akaObj);

describe('Aka', function() {
	describe('equivalent', function() {
		it('should return if two words are equivalent', function() {
			var s = new Set();
			s.addMember('postal code');
			var t = akaObj.getMember(0);
			//console.log(s);
			//console.log(t);
			akaObj.equivalent(s, t).should.be.ok

			//t.name.should.equal('zip code');
		});
	})
});

