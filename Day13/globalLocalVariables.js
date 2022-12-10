// Global and Local variables
/*
When a variable is created outside of a function, then it can be used anywhere within the script. 
It is called a global variable and has global scope.


When a variable is created inside a function using the "var" keyword, it can only be used in that function.
It is called a local variable or function level variable. It is said to have a local scope or function level scope.
it can not be accessed outside of the function in which it was declared.
*/


var avatar;
var levelThreshold = 1000;  //these are global variables. They are accessible everywhere in the code.


function getScore(points) {
    
    var score;              //The point, score, and i variables are all declared within a function. They are local variables.
    var i = 0;

    while (i<levelThreshold) { // even if we use levelThreshold inside the function, it is global because it is declared outside 
                                //of the function. 
        //code here
        i = i+1;
    }

    return score;
}