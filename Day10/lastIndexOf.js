// lastIndexOf() method:
// this method returns us the last index at which a given element can be found in the array, or -1 if it is npt present.


var numbers = [10,20,30,10,40,20];
// index =>     0  1  2  3  4  5
//             <------------------ lastIndexOf()

console.log(numbers.lastIndexOf(10)); //3
console.log(numbers.lastIndexOf(20)); //5
console.log(numbers.lastIndexOf(50)); //-1
console.log(numbers.lastIndexOf(30,2)); //2
