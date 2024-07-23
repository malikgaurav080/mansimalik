// ++++++++++
const map1 = new Map();
map1.set("a", 1);
map1.set(2, "b"); //correct way of inserting na element into map
console.log(map1);
console.log(map1.get("a"));
console.log(map1.has("a"));
console.log(map1.get("a"));

const map2 = new Map();
map2["bla"] = "blaaa";
map2["color"] = "pimk";
console.log(map2);
console.log(map2.has("bla"));

const contacts = new Map();
contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
contacts.set("fissy", { email: "abc@gmail.com", age: 24 });
console.log(contacts);
let v = contacts.get("jessie");
console.log(v);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const myMap = new Map();

const keyString = "a string";
const keyObj = {};
const keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log(myMap.size);
console.log(myMap);
// +++++++++++++++++++++++++++
const mapp = new Map();
mapp.set(0, "zero");
mapp.set(1, "one");
for (const [key, value] of mapp) {
  console.log(`${key} = ${value}`);
}
for (const key of mapp.keys()) {
  console.log(key);
}
mapp.forEach((value, key) => {
  console.log(`${key}=${value}`);
});
// +++++++++++++++++
// +++++++++++++++++++
// +++++++++++++++++
const kvArray = [
  ["key1", "value1"],
  ["key2", "value2"],
];

// Use the regular Map constructor to transform a 2D key-value Array into a map
const map5 = new Map(kvArray);

console.log(map5.get("key1"));
console.log(map5);
