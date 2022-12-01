
function findLargestElement(array) {

    var largestElement = 0;

    for (let i = 0; i < array.length; i++) {
        
        if(array[i]>largestElement){
            largestElement = array[i];
        }
        
    }
    
    // console.log(`${largestElement} is the largest number`);
}

var numbers = [3, 6, 2, 56, 32, 5, 90, 25];

// findLargestElement(array)

var salary = [2000,3000,1500,5000, 1850,2500, 4000];
findLargestElement(salary);

console.log(findLargestElement(salary));