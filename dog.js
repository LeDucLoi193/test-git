var chalk = require('chalk');
function Dog(name) {
	this.name = name;
}

function hello() {
	console.log('hello');
}

Dog.prototype.sayhi = function() {
	console.log('say hi, ' + chalk.red(this.name));
};

module.exports = Dog;