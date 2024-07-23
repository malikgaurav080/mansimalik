let arr = [1, 2, "niya", true, 45.87, 1024n];
console.log(arr);
let b = new Array(1, "masni", 12.5, 12n);
console.log(b);
let c = new Array(6);
console.log(arr[2]);
arr[2] = "mansi";
console.log(arr[2]);

arr.push(21, 32, 43);
console.log(arr);

let x = arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(54);
console.log(arr);
console.log(x);

let a1 = [12, 23, 34];
let a2 = [43, 32, 21];
// let a3 = a1.concat(a2);
console.log(a1.concat(a2));

let s = a1.join("");
console.log(s);
a1.reverse();
console.log(a1);
console.log(a1.indexOf(23));
console.log(arr.slice(2, 5));
console.log(a2.splice(2, 0, 23));
console.log(a2);
