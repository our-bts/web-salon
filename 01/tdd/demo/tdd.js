var assert = require('assert');
var should = require('should');

// npm i istanbul -g

//var mocha = require('mocha');
//var suite = mocha.suite;
//var suite         = mocha.suite;
//var setup         = mocha.setup;
//var suiteSetup    = mocha.suiteSetup;
//var test          = mocha.test;
//var teardown      = mocha.teardown;
//var suiteTeardown = mocha.suiteTeardown;



//TDD & BDD风格
//suite('Test-1', function(){
//setup(function(){
//  // 测试前执行的程序块
//});
//teardown(function(){
//  // 测试前执行的程序块，比如删除测试资源
//});
//suite('Test-1-1', function(){
//  test('Test Case 1', function(){
//    assert.equal('Hello World~', echo.print('Hello World~'));
//  });
//});
//});


describe('Array', function() {
	describe("#indexOf()", function() {
		it('如果返回-1说明 4 不在数组里面', function() {
			assert.equal(-1, [1, 2, 3].indexOf(4));
		});
	});
});



//基本结构
describe('TestModel',function(){
	before(function(){
		console.log('before');
	})
	
	after(function(){
		console.log('after');
	})
	
	beforeEach(function(){
		console.log('beforeEach');
	})
	
	afterEach(function(){
		console.log('afterEach');
	})
	
	describe('#testCase1',function(){
		it('test one',function(){
			console.log('test one');
		})
	})
})




var common = require('./tdd_common');

//入门
describe('要有自己的框架类库', function() {

//	before(function(done) {
//		setTimeout(function() {
//			common.user = {
//				name: 'seven',
//				phone: 123456,
//				roles: ['query', 'add', 'update'],
//				isAdmin: true,
//				age: 22
//			};
//			done();
//		}, 1000);
//	});
//	
   // it.only('user验证开始');

	it('要有user', function() {
		common.user.should.be.ok;
	});

	it('user要有name,phone,roles', function() {
		common.user.should.have.properties(['name','phone','roles']);
	});
	
	it('user的name不能为空', function() {
		common.user.name.should.not.be.empty;
	});
	
	it('user名字是seven', function() {
		common.user.name.should.be.equal('seven');
	});
	
	it('user的phone必须是数字', function() {
		common.user.phone.should.be.a.Number;
	});
	
	it('user的roles必须是数组', function() {
		common.user.roles.should.be.an.Array;
	});
	
	it('user的roles需要包含query权限', function() {
		common.user.roles.should.includeEql('query')
	});
	
	it('user是管理员', function() {
		common.user.isAdmin.should.be.true;
	});
	
	it('user年龄需要是18到50岁之间', function() {
		common.user.age.should.be.within(18,50);
	});
	
	it('user的所属公司是成都新蛋', function(done) {
		common.getCompanyByUser(done,function(){
			console.log('callback');
			common.user.company.should.be.eql({
				name : '新蛋',
				address : '成都'
			});
		});
	});

	
});


//你要测什么， 怎么测
describe('Test common.js', function() {
	describe('1.check number', function() {
		it('should throw error when value is not number', function() {
			(function() {
				common.checkNumber('seven');
			}).should.throw('value should be a number');
		});

		it('should throw error when value < 0', function() {
			(function() {
				common.checkNumber(-1);
			}).should.throw('value >= 0');
		});

		it('should throw error when value > 99', function() {
			(function() {
				common.checkNumber(100);
			}).should.throw('value <= 99');
		});

		it('should return 50 when value = 50', function() {
			common.checkNumber(50).should.eql(50);
		});

		it('should return true when 0 <= value <= 99 & value != 50', function() {
			common.checkNumber(1).should.be.true;
		});
	})

})