let cart = [2, 4, 7, 5, 12]; //quantity of different items in cart(which is half)

function quantity(arr) {
  for (let i = 0; i < arr.length; i++) {
    cart[i] = cart[i] * 2;
  }
  console.log(arr);
}
quantity(cart);
