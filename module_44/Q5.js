class person {
  name;
  age;
  constructor(name = "unknow", age = 0) {
    this.name = name;
    this.age = age;
  }
  get_Details() {
    return `Name : ${this.name}, Age:${this.age}`;
  }
}
let details = new person("mansi", 20);
console.log(details.get_Details());
