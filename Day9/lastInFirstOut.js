// JS stack using an array:
    //  a stack is a data structure that holdsa list of elements.
    // a stacl works based on the Last in, First Out, meaning that the most recently added element is the first one to remove.

    // JS array type provides the push() and pop() methods that allow you to use an array as a stack. 

    // 1- push() method :
    // the push method allow you to add one or more element to the end of an array.

    var numsArrays = [];

    numsArrays.push(1);
    console.log(numsArrays.toString());
    console.log(numsArrays.length);

    numsArrays.push(2);
    console.log(numsArrays.toString());
    console.log(numsArrays.length);

    numsArrays.push(5);
    console.log(numsArrays.toString());
    console.log(numsArrays.length);

    numsArrays.push(8);
    console.log(numsArrays.toString());
    console.log(numsArrays.length);
    


    // 2- pop() method:
    // it removes the element at the end of the array and returns the element to the caller. 

    var removedElement = numsArrays.pop()
    console.log(removedElement.toString());

    console.log(numsArrays.toString());