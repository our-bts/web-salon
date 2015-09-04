//如何使用原生JS实现自己的slice方法
Array.prototype.slice = function(start, end) {
	var result = new Array();
	start = start || 0;
	end = end || this.length; //this指向调用的对象，当用了call后，能够改变this的指向，也就是指向传进来的对象，这是关键
	for (var i = start; i < end; i++) {
		result.push(this[i]);
	}
	return result;
}

//JS中有没有toArray方法？如果没有，如何自己实现一个？
var toArray = function(s) {
	try {
		return Array.prototype.slice.call(s);
	} catch (e) {
		var arr = [];
		for (var i = 0, len = s.length; i < len; i++) { //arr.push(s[i]);
			arr[i] = s[i]; //据说这样比push快
		}
	}
}