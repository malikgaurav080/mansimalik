let vowel = ["a", "e", "i", "o", "u"];
let name = "Mansi_Malik";
let count = 0;
for (let i = 0; i < vowel.length; i++) {
  for (let j = 0; j < name.length; j++) {
    if (vowel[i] == name[j]) {
      count++;
    }
  }
}
console.log(count);
