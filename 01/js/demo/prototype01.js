var a = {
	x: 10,
	calculate: function(z) {
	}
};
var b = {
	y: 20,
	__proto__: a
};
var c = {
	y: 30,
	__proto__: a
};
debugger;
b.calculate(30);
c.calculate(10);