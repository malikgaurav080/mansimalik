//V^v^v^^^vv^v^v^v^v^^vv^v^^v^vv^vvvv^^^^vv^^v^^v^v^^^^vv^^v^v^^vv^v^v^v^v^v^v^v^v^v^v^v^v^
//  v^v^v^v^vvvv^vvvvvv^^^v^v^  SPREAD OPERATOR   v^v^v^v^vvvv^vvvvvv^^^v^v^v^v^v^^^^vv^^^v

function sum(x, y, z) {
  return x + y + z;
}
const num = [1, 2, 3];
console.log(sum(...num));
// console.log(sum.apply(null, num));
const obj = { ...true, ..."test", ...10 };
console.log(obj);

function myFunction(v, w, x, y, z) {
  return v + w + x + y + z;
}
const args = [0, 1];
console.log(myFunction(-1, ...args, 2, ...[3]));

const a = [[1], [2], [3]];
const b = [...a];

b.shift().shift();

console.log(a);
console.log(b);
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++  REST OPERATOR  ++++++++++++++++++++++++++++++++
function total(...theargs) {
  let total = 0;
  for (const arg of theargs) {
    total += arg;
  }
  return total;
}
console.log(total(1, 2, 3, 4));

function myFun(a, b, ...manyargs) {
  console.log("a : ", a);
  console.log("b :", b);
  console.log("many more args", manyargs);
}
myFun("one", "two", "three", "four", "five", "six", "seven");

function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1();
fun1(5);
fun1(5, 6, 7);
// ++++++++++
function multiply(multiplier, ...args) {
  return args.map((el) => multiplier * el);
}
const arr = multiply(2, 3, 4, 5, 6);
console.log(arr);
