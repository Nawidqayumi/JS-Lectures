// Logical Operators

// and => &&
var x= 10;
var y = 6;

console.log("true && true = true => " + ( x<15 && y>5 ));
console.log("false && true = false => " + ( x<9 && y>5 ));
console.log("true && false = false => " + ( x<15 && y>6 ));
console.log("false && false = false => " + ( x<9 && y>6 ));

// or => ||
console.log("true || true = true => " + ( x<15 || y>5 ));
console.log("false || true = true => " + ( x<9 || y>5 ));
console.log("true || false = true => " + ( x<15 || y>6 ));
console.log("false || false = false => " + ( x<9 || y>6 ));

// not => !
var a = 1;
var b = 1;
console.log("!(a==b)"+!(a==b)); //false
console.log("(a==b)"+(a==b)); //true