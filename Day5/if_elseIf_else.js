// If ..else if ... else statement
// Multiple if.. else statements can be nested to create an else if clause. it is used to make decision among several alternatives. 

// if (condition1){
//     // execute first statement block
// } else if (condition2) {
//     // execute second statement block
// } else if (condition3) {
//     // execute third statement block
// } else {
//     // execute fourth statement block
// }

var x = 9;
var y = 9;
var z = 9;

if (x>y && x>z) { //false
// false    false
    console.log("X is largest number");
} else if (y>x && y>z) {   //false
//         true   false
    console.log("Y is largest number");
} else if (z>x && z>y) {    //true
//         true   true
    console.log("Z is largest number");
} else {
    console.log("Numbers are equal");
}