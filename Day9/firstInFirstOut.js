// JS Queue Using an Array:

// A queue is an ordere list of elements where an element is inserted at the end of the queue and is removed from the front of the queue.
// Unlike a stack, which works based on the last-in, first-out principle, a queue works based on the first-in, first-out principle.

// JS array type provides the push() and shift() methods that allow you to use an array as queue. 

// shift() method:
// it removes the first element from an array and returns the removed element. 

var fruits =[];
fruits.push("Avocado");
fruits.push("Apple");
fruits.push("Pommegranade");
fruits.push("Melon");

console.log(fruits.toString());

var poppedElement = fruits.pop();

console.log(`pop() ${poppedElement}`);

var shiftedElement = fruits.shift();
console.log(`shift() ${shiftedElement}`);
