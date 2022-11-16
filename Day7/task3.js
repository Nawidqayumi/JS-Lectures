var totalEvenNumer= 12;

var number =0 ;

while(number<=10){
    if (number%2==0) {
        totalEvenNumer+=number; //totalnumber = totalnumber+number; 
    }
    number++;
}

console.log(`the total of even numbers : ${totalEvenNumer}`);

/*
- 0 + 2 =2
- 2+4 = 6
- 6 + 6 = 12
- 12 + 8 = 20
- 20 + 10 = 30
*/