// program to solve the problem of duplicate item in the cart

let cart = ["laptop", "book", "bottle", "book", "pen", "bottle"];
for (let i = 0; i < cart.length; i++) {
  for (let j = i + 1; j < cart.length; j++) {
    if (cart[i] == cart[j]) {
      cart.splice(i, 1);
    }
  }
}
console.log(cart);
