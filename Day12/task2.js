function findLargestNumber(num1, num2, num3) {

    if(num1>num2 && num1>num3){
        console.log(`${num1} num1 is greatest number`);
    } else if (num2>num1 && num2>num3){
        console.log(`${num2} num2 is greatest number`);
    } else if (num3> num1 && num3>num1){
        console.log(`${num3} num3 is greatest number`);
    }
    
}

findLargestNumber(2, 1, 5);

findLargestNumber(10, 20, 1);