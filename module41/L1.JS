// const square = (n) => {
//   return n ** 2;
// };
// const cube = (square, n) => {
//   return square(n) * n;
// };
// console.log(cube(square, 5));

// function sayhello() {
//   return () => {
//     console.log("hello mansi");
//   };
// }
// let guess_values = sayhello();
// console.log(guess_values);
// guess_values();

// const Higher_function = (m) => {
//   const funOne = (n) => {
//     const funTwo = (p) => {
//       return m + n + p;
//     };
//     return funTwo;
//   };
//   return funOne;
// };
// console.log(Higher_function(4)(5)(6));

// let num = [2, 5, 7, 3, 6, 9];
// const sumArr = (arr) => {
//   let total = 0;
//   arr.forEach(function (element) {
//     total = total + element;
//   });
//   return total;
// };
// console.log(sumArr(num));

function hello() {
  console.log("hello mansi");
}
setInterval(hello, 1000);
// setTimeout(hello, 3000);
clearInterval(5000);
