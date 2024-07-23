// function product(n, p, r) {
//   this.name = n;
//   this.price = p;
//   this.rating = r;
// }
// const p = new product("macbook", 150000, 5);
// console.log(p);
// let x = {
//   p: product,
// };
// x.p("airpods", 20000, 5);
// console.log(x);

const product = function (n, p, r) {
  this.name = n;
  this.price = p;
  this.rating = r;
};
const p = new product("macbook", 150000, 5);
console.log(p);
