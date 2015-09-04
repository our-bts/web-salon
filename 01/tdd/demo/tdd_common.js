module.exports = (function() {
	function Common() {
		return function() {};
	}

	Common.user = {
		name: 'seven',
		phone: 123456,
		roles: ['query', 'add', 'update'],
		isAdmin: true,
		age: 22
	}

	Common.checkNumber = function(value) {
		if (typeof value !== 'number') {
			throw new Error('value should be a number')
		}

		if (value < 0) {
			throw new Error('value >= 0')
		}

		if (value > 99) {
			throw new Error('value <= 99')
		}

		if (value === 50) {
			return 50;
		}

		return true;
	}

	Common.getCompanyByUser = function(done,callback) {
		setTimeout(function() {

			Common.user.company = {
				name : '新蛋',
				address : '成都',
			};
			callback();
			done();
           
		}, 1000);
	}

	return Common;
})();