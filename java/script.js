// -----VALUES AND DATATYPES----variables and typeof//

//solution 1 //
let str = "hey there, i have just started coding in java"; //this is a string
let number = 267; //integer number
let floatNumber = 45.23; //floating number
let infinite = Number.POSITIVE_INFINITY; //positive infinity
let negNumber = Number.NEGATIVE_INFINITY; //negative infinity
let nan = NaN; //NaN defined its not a number
let bif = 5000n; //its a bigInt which declare larger integer value, here n can be any larger number..!!
let condition = true;
let undef = undefined;
let nil = null;
let symb = Symbol("mansi malik");
let arr = ["nick", 1, 3.5, "merry", "emmie"]; ///its an array
let dict = { name: "mansi", course: "b.tech" }; // its an dictionary
console.log(typeof str); //its a strig datatype
console.log(typeof number); //its datatype is number
console.log(typeof floatNumber); //float numbers are alos of number datatype
console.log(typeof infinite); //infinite values are also fall under the category of numbers
console.log(typeof negNumber);
console.log(typeof nan); // NaN also falls under the category of number datatype
console.log(typeof bif); //its a bigint where larger integer values are stored
console.log(typeof condition); //its boolean
console.log(typeof undef);
console.log(typeof nil); //null is a object datatype,.... why???
console.log(typeof symb); //its a symbol datatype
console.log(typeof arr); // array and dictionary falls under the category of object
console.log(typeof dict);

// solution 2
let product = [
  "watch",
  "lunch box",
  "spiral notebook",
  "shoes",
  "book",
  "phone",
  "clothes",
  "electrical appliances",
  "cover",
  "mouse",
];

//solution 3
let dictionary = {
  1: "nikki",
  2: "jenny",
  3: "priya",
  4: "niya",
  5: "emmie",
};
// ---variables and typeo---//
// solution 2
// correct variables
let codn = true;
console.log(codn);
let string = "PW skills";
console.log(string);
// incorrect variables
// let var = false;
// console.log(condition); //Unexpected token 'var'
// let city <= "123";
// console.log(city);  //Unexpected token '<='

// ----operators---//
// table using loops
let table = 6;
for (let i = 1; i <= 10; i++) {
  console.log(`${table}*i = ${table * i}`);
}
// airthmetic operations
let a = 33;
let b = 77;
console.log(`sum of ${a} and ${b} is ${a + b}`);
console.log(`difference btw ${a} and ${b} is ${b - a}`);
console.log(`product of ${a} and ${b} is ${a * b}`);
console.log(`divident of ${a} and ${b} is ${b / a}`);
console.log(`modulous of ${a} and ${b} is ${b % a}`);

// parameter of rectangle
let length = 20;
let width = 40;
console.log(`parameter of rectangle is ${2 * (length + width)}`);

// comparison operators
let p = 12;
let q = "12";
let r = 12;
let s = 13;
let t = "12";
let x = 15;
let y = 20;
let z = 3;
console.log(p == q);
console.log(p === q);
console.log(p != q);
console.log(p == r);
console.log(p === r);
console.log(p == s);
console.log(q == t);
console.log(q === t);
console.log(p < y);
console.log(p > z);

// --conditional statement---/
//if-else question
let trafficlight = "yellow";
if (trafficlight == "red") {
  console.log("STOP");
} else if (trafficlight == "yellow") {
  console.log("WAIT");
} else if (trafficlight == "green") {
  console.log("GO");
} else {
  console.log("ivalid traffic light");
}
// greater btw 2 numbers
let num1 = 23;
let num2 = 34;
if (num1 > num2) {
  console.log("num1 is greater then num2");
} else {
  console.log("num2 is greater");
}

// fizzbuzz question
let num = 30;
if (num % 3 == 0 && num % 5 == 0) {
  console.log("fizzbuzz");
} else if (num % 5 == 0) {
  console.log("buzz");
} else if (num % 3 == 0) {
  console.log("fizz");
} else {
  console.log("num is neither divisible by 3 nor by 5");
}

// switchcase
let day = "wednesday";
switch (day) {
  case "monday":
    console.log("there are 5 days untill the weekend");
    break;
  case "tuesday":
    console.log("there are 4 days untill the weekend");
    break;
  case "wednesday":
    console.log("there are 3 days untill the weekend");
    break;
  case "thursday":
    console.log("there are 2 days untill the weekend");
    break;
  case "friday":
    console.log("there are 1 days untill the weekend");
    break;
  case "saturday":
  case "sunday":
    console.log("there are 0 days untill the weekend");
    break;
  default:
    console.log("invalid day");
}
// switch case question 2
let yearNumber = 11;
switch (yearNumber) {
  case 1:
    console.log("january");
    break;
  case 2:
    console.log("february");
    break;
  case 3:
    console.log("march");
    break;
  case 4:
    console.log("april");
    break;
  case 5:
    console.log("may");
    break;
  case 6:
    console.log("june");
    break;
  case 7:
    console.log("july");
    break;
  case 8:
    console.log("august");
    break;
  case 9:
    console.log("september");
    break;
  case 10:
    console.log("october");
    break;
  case 11:
    console.log("november");
    break;
  case 12:
    console.log("december");
    break;
  default:
    console.log("invalid year");
}

// ternary conditions
let anyanumber = 25;
anyanumber == 0
  ? console.log("number is 0")
  : anyanumber > 0
  ? console.log("number is greater then 0")
  : console.log("number is less than 0");
// question 2
// let a1 = 25;
// let a2 = 35;
// a1==a2
// ? console.log(`${a1} is equals to ${a2}`)
// :a1>a2
// ?console.log(`${a1} is greater then ${a2}`)
// :a1<a2?console.log(`${a2} is greater then ${a1}`);

// loops
let givenNUmber = 10;
for (let i = 1; i <= givenNUmber; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
