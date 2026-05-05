// This lesson is about Conditionals and operators in JavaScript.
// We will cover the basics of how to use conditionals to make decisions in your code,
// and how to use operators to perform operations on variables and values.

// === Operators in JavaScript ===

// JavaScript has various operators for performing operations on variables and values. Some common operators include:
// - Arithmetic Operators: +, -, *, /, %
// - Assignment Operators: =, +=, -=, *=, /=
// - Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
// - Logical Operators: && (AND), || (OR), ! (NOT)

// Arithmetic Operators
let sum = 5 + 3; // sum is 8
let difference = 10 - 4; // difference is 6
let product = 6 * 7; // product is 42
let quotient = 20 / 5; // quotient is 4
let remainder = 10 % 3; // remainder is 1

// Assignment Operators
let x = 10;
x += 5; // x is now 15 (10 + 5)
x -= 3; // x is now 12 (15 - 3)
x *= 2; // x is now 24 (12 * 2)
x /= 4; // x is now 6 (24 / 4)
x %= 5; // x is now 1 (6 % 5)

// Comparison Operators
let isEqual = 5 == 5; // isEqual is true
let isStrictEqual = 5 === 5; // isStrictEqual is true
let isNotEqual = 5 != 10; // isNotEqual is true
let isNotStrictEqual = 5 !== 10; // isNotStrictEqual is true
let isGreater = 10 > 5; // isGreater is true
let isLess = 5 < 10; // isLess is true
let isGreaterOrEqual = 10 >= 5; // isGreaterOrEqual is true
let isLessOrEqual = 5 <= 10; // isLessOrEqual is true

// Logical Operators
let andResult = true && false; // andResult is false
let orResult = true || false; // orResult is true
let notResult = !true; // notResult is false

// === Conditionals in JavaScript ===

// Conditionals allow you to execute different blocks of code based on certain conditions.
// The most common conditional statements in JavaScript are if, else if, and else.

// if statement
//to write an if statement, you use the following syntax:
if (condition) {
  // code to execute if condition is true
}

// else if statement
//to write an else if statement, you use the following syntax:
if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition2 is true
}

// else statement
//to write an else statement, you use the following syntax:
if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if condition2 is true
} else {
  // code to execute if both condition1 and condition2 are false
}

// you can use as many else if statements as you need, but you can only have one else statement at the end.

// Example of using conditionals:
let age = 25;

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior.");
}

