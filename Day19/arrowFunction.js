// ES5
// var x = function (a) {
//     return a*a;
// }

// console.log(x(4));

//ES6
var x = (a,b) => a*b;

// function x(a,b) {
//     return a*b;
// }

console.log(x(2,4));

// if we do not have any parameter
// var y = function(){
//     console.log("Hello People!");
// }

var y = () => {
    console.log("It is an arrow function");
}
y();

var z = param1 => console.log(param1);
z("That is coming from z arrow function");