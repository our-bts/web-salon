/*Number.prototype.after_sec = function(callback) {
	if (typeof callback === 'function') {
		setTimeout(callback, this * 100);
	}
};
var i = 5;
i.after_sec(function() {
	console.log('close...');
});*/



Function.prototype.method = function(name, fn) {
	this.prototype[name] = fn;
};
function Person(name) {
	this.name = name;
};
Person.method('sayHello', function() {
	console.log(this.name);
});
var jobs = new Person('jobs');
jobs.sayHello();