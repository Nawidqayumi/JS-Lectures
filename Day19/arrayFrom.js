// Array.form(); returns an array object from any object with a length property or an iterable object

var countryArray = Array.from('Afghanistan');
console.log(countryArray);

// var name = "Mohib";
// console.log(name.split(''));

var array2 = Array.from([1,2,3], x => x*2); //[ 2, 4, 6 ]
console.log(array2);

// spread operator
var array3 = [0, 1 , ...array2, 8, 10]; //[ 0, 1,  2, 4, 6, 8, 10]
console.log(array3);

var str = "Salam";
var chars = [...str]; //[ 'S', 'a', 'l', 'a', 'm' ]
console.log(chars);