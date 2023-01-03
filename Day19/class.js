//Class:
/**
 * js classes are primarily syntactical sugar over js's existing prototype-based inheritance.
 * The class syntax does not introduce a new object-oriented inheritance model to JS.
 * 
 * Classes are in fact "special function", and just as you can define function expressions and function declaration, the class syntax 
 * has two components: class expression & class declarations.
 */

// creating a classs

class Test {
    //details here

    // Constructors
    /**
     * The constructor method is a special method for creating and initializing an object created with a class.
     * There can be only one special method with the name "contructor" in a class
     */

    constructor(id, name){
        this.id = id;
        this.name = name;
    }
}

// creating an object from class

let test = new Test(1, "Mahmud");
let test1 = new Test(2, "Mohib");
console.log(test.id, test.name);
console.log(test1.id, test1.name);
// let date = new Date();
// console.log(test instanceof Test); //true
// console.log(date instanceof Test); //false

