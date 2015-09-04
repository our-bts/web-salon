var sum = function() {
	var i, sum = 0;
	for (i = 0; i < arguments.length; i += 1) {
		sum += arguments[i];
	}
	return sum;
};
console.log(sum(4, 8, 15, 16, 23, 42));


//arguments类型
function testargs() {
	var arr = [1, 2, 3];
	console.log(typeof arguments.slice);
	console.log(typeof arr.slice);

	if (arguments instanceof Array)
		console.log("Y");
	else
		console.log("N");
}
testargs();


//如何转换为数组
function arg2arr() {
	var arr = Array.prototype.slice.call(arguments);
	console.log(arr);
}
arg2arr(1, 2, 3);