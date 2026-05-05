// Functions are reusable blocks of code that perform a specific task. They allow us to break down our code into smaller,
//  more manageable pieces, and can be called multiple times throughout our program.

// In this lesson, we will learn how to create and use functions in JavaScript. We will cover the basics of function
// declaration, parameters, and return values.

// === Function Declaration ===

// To declare a function in JavaScript, you use the following syntax:
function functionName() {
  // code to be executed
}

// Example of a function that prints "Hello, World!" to the console:
function greet() {
  console.log("Hello, World!");
}

// If you then call the function like this:

greet()

// It will execute

//you can also add perameters like this:
function printValue(value) {
  console.log(value);
}

// Example of calling the function with a value:
printValue("Hello, World!");
printValue(42);
printValue(true);


// You can also have multiple parameters:
function printValues(value1, value2) {
  console.log(value1);
  console.log(value2);
}

// Example of calling the function with multiple values:
printValues("Hello, World!", 42);

// You can also return values

function addNumbers(a, b) {
  return a + b;
}

// Example of calling the function and using the returned value:
let result = addNumbers(5, 10);
console.log(result); // Output: 15


// === String Methods ===//

// There are also several string methods we can use.

// For Example:
let name = prompt("What is your name? ")

if (name == "Josh") {
  console.log("I like your name!")
} else {
  console.log("You should be named Josh")
}
// Lets say the persons name IS Josh but they say "josh" and we are looking for "Josh".
// We can use the toLowerCase() method to convert the input to lowercase.
name = name.toLowerCase();
if (name == "josh") {
  console.log("I like your name!")
} else {
  console.log("You should be named Josh")
}

// The toUpperCase() method can be used to convert the input to uppercase.
name = name.toUpperCase();
if (name == "JOSH") {
  console.log("I like your name!")
} else {
  console.log("You should be named Josh")
}

// The trim() method can be used to remove whitespace from the beginning and end of a string.
name = name.trim();
if (name == "Josh") {
  console.log("I like your name!")
} else {
  console.log("You should be named Josh")
}

// The replace() method can be used to replace a specified value with another value in a string.
name = name.replace(" ", ""); // Remove all spaces
if (name == "Josh") {
  console.log("I like your name!")
} else {
  console.log("You should be named Josh")
}

// THe break statement is used to exit a loop or switch statement.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i); // 1, 2, 3, 4
}

// The continue statement is used to skip the current iteration of a loop and move on to the next iteration.
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i); // 1, 2, 3, 4, 6, 7, 8, 9
}