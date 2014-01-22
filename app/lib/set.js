var Set = function(name) {
	this.name = name, this.members = {}
};

var set = Set.prototype;

set.setName = function(name) {
	this.name = name;
};
set.isMember = function(item) {
	return (this.members[item]);
};
set.addMember = function(item) {
	//console.log('addMember:');
	//console.log(item);
	this.members[item] = 1;
	//console.log(this.members);
};

set.size = function() {
	return Object.keys(this.members).length;
};

set.intersection = function(s, t) {
	//console.log(s);
	//console.log(t);
	var p = null, q = null;
	if (s.size() <= t.size()) {
		p = s;
		q = t;
	} else {
		p = t;
		q = s;
	}
	for (var i in p.members) {
		//console.log(q.members[i]);
		if (q.members[i]) {
			//console.log("Intersection!");
			return true;
		}
	}
	return false;
};

set.union = function(s, t) {
	var p = null, q = null;
	if (s.size() > t.size()) {
		p = s;
		q = t;
	} else {
		p = t;
		q = s;
	}
	for (var i in q.members) {
		//console.log(q.members[i]);
		p.members[i] = 1;
	}
	return p;
}

exports.Set = Set;
