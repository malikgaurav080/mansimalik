function extract(arr) {
  const [first, second, , , , , , , last] = arr;
  return [first, second, last];
}

const array = [1, 2, 3, 4, 5, 7, 8, 9, 6];
console.log(extract(array));
