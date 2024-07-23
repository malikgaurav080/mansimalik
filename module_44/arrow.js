// const product = (n, p, r) => {
//   this.name = n;
//   this.price = p;
//   this.rating = r;
// };
// const p = new product("iphone", 100000, 5);
// console.log(p);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// there is a limitation  in function constructor,we can not use it as constructor function
// let obj = {
//   x: 10,
//   fun() {
//     console.log(this.x);
//   },
// };
// obj.fun();
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let obj = {
//   x: 10,
//   fun() {
//     y = {
//       gun: () => {
//         console.log(this.x);
//       },
//     };
//     y.gun();
//   },
// };
// obj.fun();
