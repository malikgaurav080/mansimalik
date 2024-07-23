class product {
  // properties->variables->data-members
  // name;
  // price;
  // rating;
  constructor(n, p, r) {
    console.log("calling the constructor");
    this.name = n;
    this.price = p;
    this.rating = r;
    // return { x: 0, y: 20 }; //if you return any object in constructor then it will nect the object present in it and return the returned object
  }
  //   behaviour->function->member function
  display() {
    console.log(
      "displaying the current product",
      this.name,
      this.price,
      this.rating
    );
  }
}
const p = new product("iphone", 150000, 4.9); //new-> creates an empty plain objects
console.log(p);
// p.display();
let x = {
  p: product,
};
x.p("airpods", 5000, 4);
console.log(x);
