// JS os an Asynchronous Programming language.

//1- then() method: return us a promise. It takes up to two arguments: callback functions for the 
// success and failure cases of the promise.

var promise1 = new Promise(function(resolve, reject){
    resolve('Success');
});

// promise1.then(function (value) {
//     console.log(value);    
// });

promise1.then((value)=> {
    console.log(value)
});

//2-  catch() Method

//3- async/await

function resolveAfter(x) {

    return new Promise ( resolve => {
        setTimeout(() => {
            resolve(x);
        }, 5000);
    });
    
}

async function f1(){
    var z = await resolveAfter("After 5 second");
    
    console.log(z);
}
f1();




