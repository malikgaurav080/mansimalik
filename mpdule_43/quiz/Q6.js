const person = {
  name: "mansi",
  age: 20,
  address: {
    street: "B8, block B industrial Area",
    city: "bareilly",
    state: "uttar pradesh",
  },
};
function extract(person) {
  let {
    name,
    address: { street },
  } = person;
  return { name, street };
}
console.log(extract(person));
