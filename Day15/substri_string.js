// substr() method:
// it returns the part of a string between the start index and a number of character after it. 

// str.substr(startIndex, numberOfCharacter);

var str = "Javascript";
console.log(str.substr(2,3)); //Ja
console.log(str.substr(1,0)); //""
console.log(str.substr(-1,1)); //t
console.log(str.substr(-3)); //ipt
console.log(str.substr(1)); //avascript