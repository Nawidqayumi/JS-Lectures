// we can insert new element into an array while deleting
// existing elements simultaneosly by usin splice() method.

var students = ['Mike' , 'Timo' , 'Mohib'];

console.log(students.length);

students.push('Najib');

console.log(students);

console.log(students.length);

// var removedElement= students.shift();

// var removedElement = students.pop();
// console.log('removed '+ removedElement);

// console.log('actual array '+ students);

students.splice(2,0, 'Atiq');
//2 = > starting position in the array that new element will be inserted
//0 = > instruct the splice() method to not to delete any array element
//Atiq = > the element that will be inserte inside array

console.log(students);
console.log(students.length);

students.splice(2,2);

console.log(students);
