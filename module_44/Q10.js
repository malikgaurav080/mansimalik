function filterByCategory(products) {
  return function (category) {
    return products.filter(function (product) {
      return product.category === category;
    });
  };
}
var products = [
  { name: "shirt", category: "clothing" },
  { name: "pant", category: "clothing" },
  { name: "hat", category: "accessories" },
  { name: "glasses", category: "accessories" },
];
var clothingProducts = filterByCategory(products)("accessories");
console.log(clothingProducts);
