function numberchecker(arr) {
  return function (n) {
    return arr.includes(n);
  };
}
let arr = [2, 4, 6, 8, 10];
const checknumber = numberchecker(arr);
console.log(checknumber(4));
