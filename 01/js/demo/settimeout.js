var height = 10;
for (var i = 1; i <= height; i++) {
	setTimeout(function() {
		console.log(i);
	}, 200 * i);
}

var height = 10;
for (var i = 1; i <= height; i++) {
	(function() {
		var h=i;
		setTimeout(function() {
			console.log(h);
		}, 500 * h);
	})();
}
