// instance variable:  One copy per object. Every object has its own instance variables.
// static variable: one copy per class.

class Student {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    static staticSchoolName(){
        console.log("High School");
    }
}

// creating an object from class

let student1 = new Student(1, "Mahmud");
console.log(student1.id, student1.name);
Student.staticSchoolName();


let student2 = new Student(2, "Mohib");
console.log(student2.id, student2.name);
Student.staticSchoolName();

