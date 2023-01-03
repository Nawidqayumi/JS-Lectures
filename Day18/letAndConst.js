// variable declarations with let and const
// the 'let' statement declares a block scope local variable, optionally initializing it to a value

// let x = 1;

// if(x===1){
//     let x = 2
//     console.log(x); //2
// }

// console.log(x); //1


// function varTest() {
//     var x = 1;
//     if (true) {
//         var x = 2;
//         console.log(x); //2
//     }
//     console.log(x); //2
// }

// varTest();


// function varTest() {
//     let x = 1;
//     if (true) {
//         let x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }

// varTest();


// Const: Constant are block-scoped, much like variables defined using the let statement. 
// the value of constant can not change through assignment, and it can not be declared.

const number = 42;

// try{
//     number = 56;
// } catch (err) {
//     console.log(err);
// }

console.log(number);

// back tics
console.log(`The umbrella is needed  ${number}    klkjl`);
console.log('The umbrella is needed ' + number    +' klkjl');