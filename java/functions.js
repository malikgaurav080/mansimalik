greet();
function greet() {
  console.log("good morning everyone");
  console.log("how are you all!!");
}
function sqr(x) {
  //parameter
  // console.log(x * x);
  return x * x;
}
let a = sqr(4); //argument
console.log(a);

function message(say = "micky mouse") {
  console.log(say);
}
message("hi everyone ...!!");

function sum(x = 34, y) {
  return x + y;
}
// let result = sum(34, 45);
// console.log(result);

// unlimted arguments code
function product() {
  product = 1;
  for (let i = 1; i < arguments.length; i++) product = product * arguments[i];

  return product;
}
let result = product(1, 2, 3, 4, 5, 6);
console.log(result);

// arrow function
const functn = (p) => p * p;
let z = functn(5);
console.log(z);

let add = (m, n) => {
  console.log(`sum of ${m} and ${n} is :`);
  return m + n;
};

let y = add(32, 54);
console.log(y);

let diff = (q, r) => ({ sum: q + r, difference: q - r });
let e = diff(9, 3);
console.log(e);

// ----anonymous function----//
let x = function () {
  console.log("hi.. mansi this side");
};
x();

(function exec() {
  console.log("minni"); //imediately invoke function
})();

(function (x) {
  console.log(x * x);
})(6);

// object//
let obj = { name: "mansi", class: "b.tech", sec: "C" };
console.log(obj);

let emp = new Object();
console.log(emp);
emp.id = 108;
emp.class = "b.tech";
emp.age = 29;
console.log(emp);

function em(i, n, s) {
  this.id = i;
  this.name = n;
  this.salary = s;
}

const ab = new em(108, "amy", 12000);
console.log(ab);
console.log(emp.id);
console.log(emp["age"]);

// object functions//
let keys = Object.keys(emp);
console.log(keys);

let value = Object.values(emp);
console.log(value);

let entries = Object.entries(emp);
console.log(entries);

let freez_obj = Object.freeze(emp);
emp.id = 200;
console.log(freez_obj);

var sum = 0;

var arr = [10, 15, 20, 30];

arr.forEach(function myFunction(element) {
  sum = sum + element;
});

console.log(sum);
