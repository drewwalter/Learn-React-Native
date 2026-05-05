// Exception handling in JavaScript
// This involves using try, catch, and finally blocks to handle errors that may occur during code execution.

// The try block contains the code that might throw an error.
// The catch block handles the error if it occurs.
// The finally block runs regardless of whether an error occurred or not.


// Example:
try {
  // Code that might throw an error
  let result = 10 / 0;
} catch (error) {
  // Handle the error
  console.error("An error occurred:", error.message);
} finally {
  // This will always run
  console.log("Cleanup code here.");
}

// In this example, the error is caught and handled,
// and the finally block runs after both the try and catch blocks.

// This can be used to ensure that cleanup code is always executed, even if an error occurs.