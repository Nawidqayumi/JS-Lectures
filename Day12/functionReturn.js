// How to return a value from a function?
// a function can return a value by using the return statement followed by an expression or a value.

function calculateArea(width, height) {
    var area = width * height;
    return area;
}


var square1_Area = calculateArea(3,3); //9

// console.log(square1_Area);

var wallOne = calculateArea(3, 5); //15
var wallTwo = calculateArea(8, 5); //40

// console.log(wallOne + " wall one");
// console.log(wallTwo + " wall two");

var total = square1_Area + wallOne + wallTwo; //64

console.log(total);

