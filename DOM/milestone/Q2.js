let num1 = 36;
let num2 = 6;

let operator = "*";
switch (operator) {
  case "+":
    console.log(`sum of ${num1} and ${num2} is :`, num1 + num2);
    break;
  case "-":
    console.log(`subtraction of ${num1} and ${num2} is :`, num1 - num2);
    break;
  case "*":
    console.log(`product of  ${num1} and ${num2} is :`, num1 * num2);
    break;
  case "/":
    console.log(`quotient of ${num1} and ${num2} is :`, num1 / num2);
    break;
  default:
    console.log("invalid operator");
}
