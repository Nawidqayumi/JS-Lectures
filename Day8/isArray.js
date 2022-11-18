// to check if a variable is an arraym we use Array.isArray() method. it return us a boolean = > true of false. 


var cars = ["honda" , "mercedes" , "vw"];

var nubmer = 12;

console.log(Array.isArray(nubmer)); //false
console.log(Array.isArray(cars)); //true

// length

console.log(cars.length); // it return us the current total elemnt of an array with numbers

// toString() = > with this method we get string represented as a comma-separated list of elements. 
console.log(cars.toString());

