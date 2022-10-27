// The marks obtained by a student in 3 different subjects are input by the user. Your
// program should calculate the average of subjects. The student gets a grade as per the
// following rules:

// 90-100 = A
// 80-89 = B
// 70-79 = C
// 60-69 = D
// 0- 59 = F

var subject1 = 500;
var subject2 = 95;
var subject3 = 88;

var averageScore = (subject1+subject2+subject3)/3;

if(averageScore>=90 && averageScore<=100){

    console.log(`Your average score ${averageScore} is: A`);

} else if (averageScore>=80 && averageScore<=89){

    console.log(`Your average score ${averageScore} is: B`);

} else if (averageScore>=70 && averageScore<=79){

    console.log(`Your average score ${averageScore} is: C`);

} else if (averageScore>=60 && averageScore<=69){

    console.log(`Your average score ${averageScore} is: D`);

} else if (averageScore>=0 && averageScore<=59){

    console.log(`Your average score ${averageScore} is: F, you are failed!!`);

} else {
    console.log(`There isn't such a number ${averageScore}`);
}

