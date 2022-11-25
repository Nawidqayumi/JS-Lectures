// functions

// 1:
var dogName = "Rover";
var dogWeight = 23;

if( dogWeight>20 ){
    console.log(`${dogName} says WOOF WOOF`);
} else {
    console.log(`${dogName} says woof woof`);
}

// 2:
var dogName = "Spot";
var dogWeight = 13;

if( dogWeight>20 ){
    console.log(`${dogName} says WOOF WOOF`);
} else {
    console.log(`${dogName} says woof woof`);
}


// 3:
var dogName = "Spike";
var dogWeight = 53;

if( dogWeight>20 ){
    console.log(`${dogName} says WOOF WOOF`);
} else {
    console.log(`${dogName} says woof woof`);
}

// 4:
var dogName = "Lady";
var dogWeight = 17;

if( dogWeight>20 ){
    console.log(`${dogName} says WOOF WOOF`);
} else {
    console.log(`${dogName} says woof woof`);
}


// the code seems very redundant.
// if we want to change the display of the output, or add another weight for dogs, this is going to require a lot of re-working. 
// it seems complex. 
// not the most readable code.

// Functins :  what is function?
/* 
Functions let us group a series of statement together to perform a specifc task. 
If different parts of a script repeat the same, we can reuse the function(rather that repeating the same set of statements)
*/

// Declaring a function:
// To create a function, we give it a name & then write the statement needed to achiece its task inside the curly brace. {}

function sayHello() {
    console.log('Hello!');
}

// function : function keyword
// sayHello() : function name
// {
    // console.log('Hello!');   ==> Code block (in curly braces)
// }

// Calling a function: 

sayHello();