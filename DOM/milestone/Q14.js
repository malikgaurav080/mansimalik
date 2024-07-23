const calculateTotalCost = (cart) => {
  return cart.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0
  );
};

const cart = [
  { unitPrice: 10, quantity: 2 },
  { unitPrice: 5, quantity: 5 },
  { unitPrice: 20, quantity: 1 },
];

const totalCost = calculateTotalCost(cart);
console.log(totalCost);
