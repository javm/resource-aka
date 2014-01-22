var Set = require('./lib/set').Set;

//The set of sets, every set representing a term
var Aka = function(terms) {
	//Array of sets
	this.terms = [];
	var self = this;
	terms.forEach(function(term) {
		var setObj = new Set();
		//console.log(term);
		setObj.setName(term.name);
		term.members.forEach(function(item) {
			//console.log('setObj:')
			//console.log(setObj);
			setObj.addMember(item);
		});
		self.terms.push(setObj);
	});
};

Aka.prototype.getMember = function(index) {
	return this.terms[index];
};

//Check if term1.elements intersection term2.elements is not empty and then this terms are equivalent.
Aka.prototype.equivalent = function(word1, word2) {
	var s = new Set();
	return s.intersection(word1, word2);
	/*
	 var self = this;
	 var keys = Object.keys(term.elements);
	 //var k  = Object.keys(term.elements)[0];
	 //console.log(k);
	 for(var j in keys){
	 var k = keys[j];
	 for (var i in self.terms){
	 t = self.terms[i]
	 //console.log(i);
	 if(t.isMember(k) === 1){
	 //console.log(i);
	 return t;
	 }
	 }
	 }
	 return undefined;
	 */
}

Aka.prototype.similarTo = function(word) {
	var self = this;
	self.reduce();
	for (var t in self.terms) {
		if (self.terms[t].isMember(word)) {
			return Object.keys(self.terms[t].members);
		}
	}
}


Aka.prototype.reduce = function(){
	var self = this;
	var s = new Set();
	for(var i=0; i < self.terms.length -1 ; i++){
		var a = self.terms[i];
		var b = self.terms[i+1];
		if(self.equivalent(a, b)){
			self.terms[i] = s.union(a,b);
			self.terms.splice(i+1, 1);
		}
	}
}


exports.Aka = Aka;
