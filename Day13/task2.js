// Write a function that accepts 2 non-negative numbers and return if they have the same last digit.

// (2, 12); => true
// (3, 14); => false


function compareLastDigit(number1, number2){
    var result1 = number1 % 10;
    var result2 = number2 % 10;

    if (result1 === result2) {
        return true;
    } else {
        return false;
    }
}

console.log(compareLastDigit(42, 23));
