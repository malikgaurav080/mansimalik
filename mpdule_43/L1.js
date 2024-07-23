// let newarr = [2, 4, 7, 9, 3];
// console.log(typeof newarr);

// const onearr = [2, 6, 8, 3, 5];
// const twoarr = [8, 9, 6, 7, 5];
// const threearr = onearr.concat(twoarr);
// const threearr = [...onearr, ...twoarr]; //spread operartor
// console.log(threearr);
// function testone() {
//   console.log(typeof arguments);
// }
// testone(1, 2, 3, 4);
// let arr1 = [1, 2, 3];
// let arr2 = new Array(4, 5, 6);
// console.log(arr1);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function manyargs() {
  console.log(typeof arguments);

  let args = Array.from(arguments);
  const final_arr = args.map((e) => e);
  console.log(final_arr);
}
function manyargs2(...args) {
  console.log(typeof args);
  const final_arr = args.map((e) => e);
  console.log(final_arr);
}
// manyargs(2, 3, 4, 5);
// manyargs2(6, 7, 8, 9);

const name = ["superman", "flash"];
const name2 = ["batman", "ironman", ...name, "thor"];
// console.log(name2);

const sitename = "mansi_malik";
// console.log([...sitename]);

function pw(...values) {
  return values;
}
// console.log(pw("superman", "flash"));
let set = new Set();
set.add(3);
set.add(6);
set.add("hey");
const a = { ab: 1, bc: 2 };
set.add(a);
console.log(set);
// ++++
let ab = set.has(Math.sqrt(36));
set.delete(6);
console.log(ab);
let x = set.size;
console.log(x);
console.log(set);
// ++++++++++++++++++
const setA = new Set([2, 3]);
// setA.add(3);
const setB = new Set([4, 5]);
// setB.add(4);
function union(setA, setB) {
  const _union = new Set(setA);
  for (const elem of setB) {
    _union.add(elem);
  }
  return _union;
}
console.log(union(setA, setB));
// ++++++++++++++++++
let arr = [1, 2, 3, 4, 3, 2];
let newset = new Set([...arr]);
console.log(newset);
newset.clear();
console.log(newset);
// set differeneve
let set1 = new Set([2, 3, 4, 5]);
let set2 = new Set([4, 5, 6, 7]);

function set_difference(set1, set2) {
  return new Set([...set1].filter((el) => set2.has(el)));
}
console.log(set_difference(set1, set2));
// ++++++++++++++++++++++++++++++++++++++++++++++
//MAP
let map1 = new Map();
console.log(map1.size);
let array = [
  [1, "abc"],
  [2, "bcd"],
  [3, "def"],
  [4, "ghi"],
  [5, "jkl"],
];
// map1.add([5, "mno"]);
map1.set(array);
// console.log(map1);
let map2 = arr.map((item) => (item[0], item[1]));
