// includes() Method:
// this method determines whether one string maybe be found within another string, and returning a boolean variable (true or false)

var str = "Hello Mike, welcome to the ET-test";
        // 0123456

var n = str.includes("Mike"); //true

console.log(n);

// indexOf() Method:
// this method returns the index within the calling string of the first occurrence of the specified value, string fromIndex.
// returns -1 if the value is not found. 

var indexOfName = str.indexOf("Mike");
console.log(indexOfName);

