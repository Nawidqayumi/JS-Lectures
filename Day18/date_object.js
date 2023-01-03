// creating an instance of the object
// var instanceName = new ObjectName();

// creating an instance of the date object:

var today = new Date();

// var : variable declaration
// today : variable name
// = : assignment operator
// new : New Keyword
// Date() : Date Object Constructor


var d = new Date();
console.log(d);


console.log(d.getTime());
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getDay());

var eventDate = new Date("January 02, 2023 20:50:00");

eventDate.setDate(24);
console.log(eventDate.getDate());

var theBigDay = new Date(1962, 6 ,7);
theBigDay.setDate(20);
console.log(theBigDay);

theBigDay.setMonth(11);
console.log(theBigDay);

theBigDay.setFullYear(2023);
console.log(theBigDay);
