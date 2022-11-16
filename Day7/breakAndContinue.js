// Branching Statements : 

// 1- break;  this keyword causes the termination of loop and tell the intrepreter 
// to go to the next statement outside of the loops. / it jumps out of the loop statements.


for (let i = 0; i < 10; i++) {

    if (i==3){
        break;
    }
    console.log(`the index is with break : ${i}`);
}

// 2- continue; it skip only currently iteration and jump to another iteration. 

// for (let i = 0; i < 10; i++) {

//     if ( i%2 != 0 ) {
//         continue;
//     }
//     console.log(`the index is with continue : ${i}`);
// }



var name = 2;
var number = 1;

console.log(typeof(name) +" "+typeof(number) +" =>"+ (name == number));
console.log(typeof(name) +" "+typeof(number) +" =>"+ (name === number));
