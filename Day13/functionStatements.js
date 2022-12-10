// 1
function add(a,b) {
    return a+b;
}


// we can assign a function to a variable
// 2
var add = function (a,b) {
    return a+b;
}

// 3
var add = (a,b) => {
    return a+b;
}

var result = add(10, 20);

console.log(result);