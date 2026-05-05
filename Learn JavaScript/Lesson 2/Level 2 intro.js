// Loops in JavaScript allow you to repeat a block of code multiple times.
// The most common types of loops are "for", "while", and "do...while".

// === For Loop ===

// The for loop consists of three parts: initialization, condition, and increment/decrement.
// The syntax for a for loop is as follows:
for (initialization; condition; increment/decrement) {
  // code to be executed
}

/* Initialization: This is where you declare and initialize a variable that will be used in the loop.
It is executed only once at the beginning of the loop. */

/* Condition: This is a boolean expression that is evaluated before each iteration of the loop.
If the condition is true, the loop continues to execute. If it is false, the loop terminates. */

/* Increment/Decrement: This is where you update the loop variable after each iteration.
It is executed at the end of each loop iteration.
You can use either increment (e.g., i++) or decrement (e.g., i--) depending on whether you want to count up or down. */

// Example of a for loop that prints numbers from 0 to 4:
for (let i = 0; i < 5; i++) {
  console.log(i);
} // This will print 0, 1, 2, 3, and 4 to the console.

// === While Loop ===
// The while loop executes a block of code as long as a specified condition is true.
// The syntax for a while loop is as follows:
while (condition) {
  // code to be executed
}

// The condition is evaluated before each iteration of the loop.
// If the condition is true, the code block is executed. If it is false, the loop terminates.

// Example of a while loop that prints numbers from 0 to 4:
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
} // This will also print 0, 1, 2, 3, and 4 to the console.

// Note: Be careful with while loops, as they can create infinite loops if the condition never becomes false.

// === Do...While Loop ===
// The do...while loop is similar to the while loop, but it executes the block of code at least once before checking the condition.
// The syntax for a do...while loop is as follows:
do {
  // code to be executed
} while (condition);

// Example of a do...while loop that prints numbers from 0 to 4:
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5); // This will also print 0, 1, 2, 3, and 4 to the console.