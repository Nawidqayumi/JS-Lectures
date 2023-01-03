// map() method:

/**
 * The map () method creates a new array with the result of calling a provided function on every element in the calling array.
 */

var array1 = [1,3,5,7,9];

// pass a function to map
const map1 = array1.map(x => x*x); //[1,9,25,49,81]

console.log(map1); //[ 1, 9, 25, 49, 81 ]