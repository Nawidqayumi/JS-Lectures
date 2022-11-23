// slice() method:
// the slice() method returns a shallow copy of a portion of an array
// into a new array selected from begin to end (end not included).
// the original array will not be modified. 

var animals = ['ant' , 'bison' , 'camel' , 'duck', 'elephant'];
//  index =>     0        1        2         3          4
//             ------------------> indexOf()

// var selectedAnimal = animals.slice(2);

// var selectedAnimal = animals.slice(2,4);

var selectedAnimal = animals.slice(1,5);

console.log(selectedAnimal);

// indexOf() => it returns the first index at which a given element can be found in
// the array, or -1 if it is not present. 

console.log(animals.indexOf('camel')); //2
console.log(animals.indexOf('elephant')); //4
console.log(animals.indexOf('Kharpushtak')); //-1
console.log(animals.indexOf('camel',3)); //-1
