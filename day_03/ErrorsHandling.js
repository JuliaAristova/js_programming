console.log("Test started...");

try {
  console.log(result);
} catch (e) {
  console.log(`An error occurred: ${e}`);
} finally {
    console.log("Finally block.");
}
console.log("Test ended.");

console.log("_____________");

throw new Error("An error occurred")