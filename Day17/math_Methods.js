// 1.  Math.PI : return PI
console.log(Math.PI); //3.141592653589793

// 2.  Math.round() :rounds number to the nearest integer
console.log(Math.round(2.60));//3
console.log(Math.round(-2.50));//-2
console.log(Math.round(2.50));//3
console.log(Math.round(2.49));//2

// 3.  Math.sqrt(n) :returns square root of positive number
console.log(Math.sqrt(64)); //8
console.log(Math.sqrt(9)); //3
console.log(Math.sqrt(-9)); //NaN

// 4.   Math.floor()  :round number down to the nearest integer
console.log(Math.floor(0.60));//0
console.log(Math.floor(5.60));//5

// 5.   Math.ceil()    :rounds numbers up to the nearest integer
console.log(Math.ceil(0.40));//1
console.log(Math.ceil(5.60));//6


// 6.   Math.random()  : return a random number between 0 and 1

var a  = Math.random();
console.log("Random Number " + a);

// random number between 1 and 10

var b  = Math.round (Math.random()*10 +1);
console.log("Random Number 1-10: " + b);


// random number between 1 and 100

var c  = Math.round (Math.random()*100 +1);
console.log("Random Number 1-100: " + c);