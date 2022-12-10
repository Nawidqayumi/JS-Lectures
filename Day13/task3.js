function findEvenNumber(number) {

    if(number%2 == 0){
        return `${number} is an even number`;
    } else{
        return `${number} is an odd number`;
    }
    
}

console.log(findEvenNumber(9999990));