// Getters and Setters: Encapsulation
/**
 * Getters and setters are function or methods used to get and set the value of variables.
 * 
 * The idea of getter and setter is always mentioned in conjuction with encapsulatio.
 * Encapsulation is done to hide data, to make it inaccessible from other code, except through 
 * the getter and setter. This way we do not end up accidentally overwriting important data with 
 * some other code in the program.
 */

class EncapTest {
    constructor(name, id, age){
        this._name = name;
        this._id = id;
        this._age = age;
    }

    get Age() {
        return this.age;
    }

    get Id() {
        return this.id;
    }

    get  Name() {
        return this.name;
    }

    set Age(newAge) {
        this.age = newAge;
    }

    set Id(newId) {
        this.id = newId;
    }

    set Name(newName) {
        this.name = newName;
    }
}

var encap = new EncapTest();
encap.Name = "Tester";
encap.Age = 31;
encap.Id = 24;

console.log(`Name: ${encap.Name}  Age: ${encap.Age}  ID: ${encap.Id}`);

var encap2 = new EncapTest("Rahmet", 40, 20);
console.log(`Name: ${encap2.Name}  Age: ${encap2.Age}  ID: ${encap2.Id}`);
