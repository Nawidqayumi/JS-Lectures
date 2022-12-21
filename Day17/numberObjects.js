// 1. isNan() method: Checks if the value is not a number

var car = {
    year:1995,
    name: 'honda'
}
console.log(isNaN(car.name)); //true
console.log(isNaN(car.year)); //false

// 2. toFixed()  method: Rounds to specified number of decimal places (returns a string)

var numbers = {
    num1: 213.73145,
    num2:13.3714
};

console.log("toFixed() " +numbers.num1.toFixed()); //214
console.log("toFixed() " +numbers.num1.toFixed(3)); //213.731
console.log("toFixed() " +numbers.num1.toFixed(2)); //213.73
console.log("toFixed() " +numbers.num1.toFixed(1)); //213.73


// 3. toPrecision() method: rounds to total number of places (return a string)
console.log("toPrecision() " + numbers.num2.toPrecision()); //13.3714
console.log("toPrecision() " + numbers.num2.toPrecision(2)); //13
console.log("toPrecision() " + numbers.num2.toPrecision(3)); //13.4
console.log("toPrecision() " + numbers.num2.toPrecision(10)); //13.37140000
