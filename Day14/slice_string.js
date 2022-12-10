// slice() method:
// this method extracts a section of a string and returns it as a new string.

var str = "The morning is upon us."
//         012345678 

console.log(str.slice(1, 8)); //he morn
console.log(str.slice(4,-2)); //morning is upon u
console.log(str.slice(12)); //is upon us.
console.log(str.slice(40)); //""
