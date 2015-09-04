//方法调用模式
var o = {
	setName: function(name) {
		this.name = name;
	}
}
o.setName('jobs');
console.log(o.name);

//函数调用模式
function foo(name) {
	this.name = name;
	console.log(name);
}
foo('jobs');

//构造器调用模式
var Foo = function(name) {
	this.name = name;
};
var o = new Foo('jobs');
console.log(o.name);

//Apply调用模式
var foo = function(name) {
	this.name = name;
}
var o = {};
foo.apply(o, ['jobs']); //或foo.call(o,'jobs');
console.log(o.name);