//函数的回调
var foo = function(callback) {
	if (typeof callback === "function")
		callback("this is a function");
	else
		console.log(callback);
}

foo(function(arg) {
	console.log(arg);
});