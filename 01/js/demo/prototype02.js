function Foo(y) {
	this.y = y;
}
Foo.prototype.x = 10;
Foo.prototype.calculate = function(z) {
	console.log(this.x + this.y + z);
};
var b = new Foo(20);
b.calculate(30);