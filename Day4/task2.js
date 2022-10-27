var appleCount = 20;
var orangeCount = 30;
var pearCount = 30;

var comp = appleCount<orangeCount || orangeCount>=pearCount; 
//              20<30             ||     30>=30 ;
//              true              or        true        => true
console.log(comp);