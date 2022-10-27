// Nested if statement

var expectedUsername = "et-test";
var actualUsername = "a";

if(actualUsername!=""){

    if(expectedUsername==actualUsername){
        console.log("username is correct!");
    } else {
        console.log("username is incorrect!");
    }

} else {

    console.log("username can not be empty!");
}