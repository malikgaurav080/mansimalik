// function init() {
//   let name = "mansi";
//   function displayName() {
//     let age = 20;
//     console.log(name); //inner function can access the outer variable.....
//   }
//   console.log(age); //outer function cannot access the inner variable.....
//   displayName();
// }
// init();
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// if (Math.random() > 0.5) {
//   var x = 1;
// } else {
//   var x = 2;
// }
// console.log(x);
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let score = 2;
// function one() {
//   var score = 0;
//   console.log(score);
// }
// function two() {
//   console.log(score);
// }
// one();
// two();
// console.log(score);
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let global_value = 5;
// function top() {
//   const val1 = 1;
//   console.log(val1, global_value);
//   function inner() {
//     const val2 = 2;
//     console.log(val2, val1, global_value);
//     function inner2() {
//       const val3 = 3;
//       console.log(val3, val2, val1, global_value);
//     }
//     inner2();
//   }
//   inner();
// }
// top();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const error = "error found!!";
setTimeout(function callback() {
  console.log(error);
}, 1000);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let count = 0;
let items = [2, 4, 6, 8];
items.forEach((num) => {
  count++;
  console.log(num);
});
console.log("pagecount:", count);
