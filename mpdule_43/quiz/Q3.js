let x = 6;
let y = 12;

function swap(x, y) {
  [x, y] = [y, x];
  return [x, y];
}
console.log(swap(x, y));
