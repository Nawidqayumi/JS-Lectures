function calculate(number1, number2, operator) {
  var total;
  switch (operator) {
    case "+":
      total = number1 + number2;
      break;
    case "-":
      total = number1 - number2;
      break;
    case "*":
      total = number1 * number2;
      break;
    case "/":
      total = number1 / number2;
      break;
    default:
        console.log(`There is some undefined steps`);
      break;
  }

  console.log(`total of number1 ${operator} number2 = ${total}`);
}

calculate(3, 2, '+');
calculate(6, 2, '-');
calculate(10, 3,'*');
calculate(40, 2 , '/');
