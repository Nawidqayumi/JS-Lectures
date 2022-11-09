// Write a program to display days:
// 1-Monday
// 2-Tuesday
// 3-Wednesday
// 4-Thursday
// 5-Friday
// 6-Saturday

var today;

var weekday = "Friday";

switch (weekday) {
  case "Monday":
    today = weekday;
    break;
  case "Tueday":
    today = weekday;
    break;
  case "Wednesday":
    today = weekday;
    break;
  case "Thursday":
    today = weekday;
    break;
  case "Friday":
    today = weekday;
    break;
  case "Saturday":
    today = weekday;
    break;
  case "Sunday":
    today = weekday;
    break;
  default:
    today = "There is something wrong in spelling in input, please control it."
    break;
}

console.log(`Today is ${today}`);
