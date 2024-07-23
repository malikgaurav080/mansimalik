// let [a, b, ...rest] = [2, 3, 4, 5, 6, 7, 8]; //REST is not any keyword here,we con use any word in place of rest
// console.log(a);
// console.log(b);
// console.log(rest);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let x = [2, 3, 4, 5, 6, 7, 8];
// let [y, z] = x;
// console.log(y);
// console.log(z);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const obj = { a: 1, b: 2 };
// const { p, q } = obj;
// console.log(p);
// console.log(q);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const [a = 1] = []; // a is 1
// const { b = 2 } = { b: undefined };
// const { c = 2 } = { c: null };
// console.log(a, b, c);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const { a, ...others } = { a: 1, b: 2, c: 3 }; //OTHERS is not any keyword here,we con use any word in place of rest
// console.log(a);
// console.log(others);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const foo = ["one", "two", "three"];
// const [red, blue, green] = foo;
// console.log(blue, red, green);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let a = 2,
//   b = 3;
// [a, b] = [b, a];
// console.log(a, b);
// +++++++++++++++++++++++++++++++
// let arr = [2, 4, 6, 8];
// [arr[1], arr[2]] = [arr[2], arr[1]];
// console.log(arr);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function f() {
//   return [45, 56, 67];
// }
// const [a, , b] = f();
// const [a, b] = f();
// console.log(a, b);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const num = [1, 2, 3, 4, 5, 6, 7];
// const [a, b, ...{ length }] = num;
// console.log(a, b, length);
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function parseProtocol(url) {
//   const parsedURL = /^(\w+):\/\/([^/]+)\/(.*)$/.exec(url);
//   if (!parsedURL) {
//     return false;
//   }
//   console.log(parsedURL);

//   const [, protocol, fullhost, fullpath] = parsedURL;
//   return protocol;
// }

// console.log(
//   parseProtocol("https://developer.mozilla.org/en-US/docs/Web/JavaScript")
// );
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
}
drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});
