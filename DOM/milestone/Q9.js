let arr = [24, 36, 9, 15, 21, 30];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 == 0 && arr[i] % 2 != 0) {
    console.log(arr[i]);
  }
}
