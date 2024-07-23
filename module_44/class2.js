class product {
  // data member
  //   name;
  //   price;
  #rating; //putting # in front of a variable to make it private
  constructor(n, p, r) {
    this.name = n;
    this.price = p;
    this.#rating = r;
    // console.log(n, p, r);
    // return { x: 10, y: 20 };
  }
  //   static function
  static custom() {
    console.log("calling the static function");
  }
  // getter method
  get ratingGetter() {
    console.log(this.#rating);
  }
  // setter method
  set ratingSetter(r) {
    if (r < 0) return;
    this.#rating = r;
  }

  //   member function
  display() {
    console.log("this refers to", this);
    console.log("displaying the class", this.name, this.price, this.#rating); //private variables can be visible in class functions
  }
}
const p = new product("iphone", 100000, 5); // new creates an empty plain object....
console.log(p);
p.name = "samsung";
console.log(p.name);
p.display();
product.custom(); //static functions cannot be called by object, it an only be called by its class name
p.ratingSetter = 10;
p.ratingGetter;
