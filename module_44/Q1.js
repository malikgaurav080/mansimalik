let str = "abc";
function convertToNumber(str) {
  try {
    let num = parseInt(str);
    if (Number.isNaN(num)) {
      console.log("invalid number");
    }
    return num;
  } catch (error) {
    return error;
  }
}

console.log(convertToNumber(str));
