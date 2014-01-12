describe('Broken JSON',function() {
	it('should initially not be a function',function() {
		JSON.should.be.a('string');
	});
});
describe('Correct JSON',function() {
	before(function(done) {
		var script = document.createElement('script');
		script.src = '../jsonback.min.js';
		script.onload = function() {
			done();
		};

		document.querySelector('head').appendChild(script);
	});
	it('should be a function after jsonback has run',function() {
		chai.should();

		JSON.should.be.a('function');
		JSON.should.have.property('parse');
		JSON.should.have.property('stringify');
	});
});