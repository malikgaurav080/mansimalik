// try {
//   let x = undefined;
//   console.log(x[0]);
// } catch (error) {
//   console.log("error handling in catch", error);
// } finally {
//   console.log("finally always gets executed");
// }
try {
  console.log("try block");
  console.log(a);
  console.log(
    "this statement will not print because of the above wrong statement"
  );
} catch {
  console.log("error correction");
} finally {
  console.log(
    "this block will always execute doesn't matter their is error or not in the code"
  );
}
console.log("end");
