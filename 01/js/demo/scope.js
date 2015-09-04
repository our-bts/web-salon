var scope = 'global';
var f1 = function() {
	console.log(scope);
}
f1(); 

//
function f1() {　　
	n = 999;
	var a=a1=2;
}　
f1();　
console.log(n); 
console.log(a); 
console.log(a1); 

//
var scope = 'global';
var f3 = function() {
	console.log(scope);
	var scope = 'f3';
}
f3(); 

var scope = 'global';
var f4 = function() {
	var scope; 
	console.log(scope);
	scope = 'f4'; 
}
f4(); 


//
function f5() {　　　　
	var n = 999;　
	function f6() {　　　　　　
		console.log(n);　　　
	}　　　　
	return f6;　　
}　　
var result = f5();　　
result(); 





