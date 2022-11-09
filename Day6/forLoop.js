// 1- for 
// if we need to run a code block in specific number of time, we user for loop.
// In a for loop, the condition usually a counter which is used to tell how many 
// times the loop should run. 

for (var i = 0; i < 10; i+=2) {
    console.log(`Our index is ${i}`);
}

// for : keyword
// (var i = 0; i < 10; i++) => condition (counter)
// console.error(`Our index is ${i}`); => code executed inside for loop block

// var i = 0; =>initialization: it executed once, as the loop begin.
// i<10 ; =>condition/termination ; it checks coditions, only when the condition 
// is flase then it terminate automatically.
// i++ => increment/update