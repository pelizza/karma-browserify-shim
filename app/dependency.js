require('jquery');
require('angular');

console.log('This is jquery on dependency.js:');
console.log($);

console.log('This is angular on dependency.js:');
console.log(angular);

module.exports = {
	angularVar: angular,
	jqueryVar: $
};