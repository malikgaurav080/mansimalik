let a = 3;
let b = new String(3);
let c = 3;

console.log(typeof b);
console.log(a == b);
console.log(a === b);
console.log(b === c);

// let greeting;
// greetign = {};
// console.log(greetigns);

let number = 0;
console.log(number++);
console.log(++number);
console.log(number);

const sum = eval("10*10+5");
console.log(sum);

var num = 8;
var num = 10;
console.log(num);

console.log(typeof typeof 1);

const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);

console.log(3 + 4 + "5");
console.log(3 + 4 - "5");

console.log("i enrolled to the pw fswd course"[0]);

// const name = "mansi malik";
// console.log(name());

const one = false || {} || null;
const two = null || false || "";
const three = [] || 0 || true;

console.log(one, two, three);

for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

console.log(5 / 0);

const name = "mansi malik";
console.log(!typeof name === "object");
console.log(!typeof name === "string");

for (var i = 2; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
