// Here is a javascript program that has errors. Use try...catch to handle them.
// do not fix the errors, just handle them with try...catch

function divideNumbers() {
  const a = Number(prompt("Enter the first number:"));
  const b = Number(prompt("Enter the second number:"));

  // BUG 1: If user types text, Number(...) becomes NaN (Not a Number)
  // BUG 2: If b = 0, division by zero gives Infinity
  // BUG 3: If user cancels prompt, a or b becomes null → crash

  const result = a / b;
  console.log("Result:", result.toFixed(2)); // BUG 4: toFixed() crashes if result is NaN
}

divideNumbers();