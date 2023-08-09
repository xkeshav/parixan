var Person = function (name) {
	this.name = name;
}

var getData = function () {
	if (this && this.name) {
		console.log(this.name + ' has name');
	} else {
		console.log('error');
	}
}

const one = new Person('one');
const two = new Person('two');
const three = new Person('three');

getData(one);
Person.prototype.getData = getData;
console.log({ Person });
Person.getData(two);
getData.call(two, one);
