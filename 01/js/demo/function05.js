//函数对象化
function Sing() {	
	console.log(Sing.author + "：" + Sing.poem);
}
Sing.author = "李白";
Sing.poem = "汉家秦地月，流影照明妃。一上玉关道，天涯去不归";
Sing();
Sing.author = "李战";
Sing.poem = "日出汉家天，月落阴山前。女儿琵琶怨，已唱三千年";
Sing();


//对象和函数可以象数组一样，用属性名或方法名作为下标来访问并处理。
var anObject = {};
anObject.aProperty = "Property of object";
anObject.aMethod = function() {
	console.log("Method of object");
};
console.log(anObject["aProperty"]);
anObject["aMethod"]();
for (var s in anObject)
	console.log(s + " is a " + typeof(anObject[s]));
	
	
var aFunction = function() {};
aFunction.aProperty = "Property of function";
aFunction.aMethod = function() {
	console.log("Method of function");
};
console.log(aFunction["aProperty"]);
aFunction["aMethod"]();
for (var s in aFunction)
	console.log(s + " is a " + typeof(anObject[s]));