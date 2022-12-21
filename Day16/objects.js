// Object: object contain properties and methods/ function


// Name:Hilton
// Rooms:100
// Booked:25
// Gym:true
// roomTypes:["twin", "double", "suite"]
// checkAvailability: function (){ //code execution}


/*
Properties          |   Key     |       value   |
                    | name      | string        |
                    | rooms     | number        |
                    | booked    | number        |
                    | gym       | boolean       |
Methods             | checkAvailability | function/Method |
*/


// Name:Maiwand
// Rooms:10
// Booked:8
// Gym:false
// roomTypes:["twin", "double"]
// checkAvailability: function (){ //code execution}


// Model
// Year
// Color
// km


// 1.object:

// Model: Opel Corsa
// Year: 2000
// Color: White
// km: 120.000km

// 2. Object

// Model: Golf
// Year: 2012
// Color: Black
// km: 90.000km


// How to create an Object in JS?

/**
 *      var objectName = {
 *              propertyKey: "PropertiesValue",
 *              functionName: function(){
 *                  //code execution
 *              }
 *      };
 * 
 *       {} => curly braces
 *        : => colon
 *        ; => semicolon
 */

var hotel = {
    name: 'Hilton',
    rooms: 40,
    booked: 25,

    checkAvailability: function () {
        return this.rooms - this.booked;
    }
};


// How to access a property in an object?  objectNam.propertyName;

console.log(hotel.booked);
console.log(hotel.rooms);
console.log(hotel.name);
console.log(hotel.checkAvailability());




