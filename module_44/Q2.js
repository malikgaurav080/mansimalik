function getPerson(person) {
  try {
    if (typeof person !== "object" || !person.name || !person.age) {
      throw new Error("invalid object");
    }
    return `Name :${person.name}, age :${person.age}`;
  } catch (error) {
    return error.message;
  }
}

console.log(getPerson({ name: "Mithun", age: 20 }));
