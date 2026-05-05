// Introduction to JavaScript

// To write a comment in JavaScript, you can use two forward slashes (//) for single-line comments, or /* */ for multi-line comments.

// === Comments in JavaScript ===
// This is a single-line comment

/*
This is a multi-line comment
You can write multiple lines of comments here
*/

// === Variables in JavaScript ===
// Variables are used to store data. In JavaScript, you can declare a variable using var, let, or const.

// Using var (function-scoped)
var name = "Alice";

// Using let (block-scoped)
let age = 30;

// Using const (block-scoped, cannot be reassigned)
const pi = 3.14;

/* var is function-scoped, which means it is accessible within the function it is declared in.
let and const are block-scoped, meaning they are only accessible within the block they are declared in
(e.g., inside a loop or an if statement).
const is used for variables that should not be reassigned, while let is used for variables that can be reassigned.
It's generally recommended to use let and const instead of var for better code readability and to avoid potential issues */

// === Data Types in JavaScript === //

// JavaScript has several data types, including:
// - String
// - Integer (Number)
// - Boolean
// - Float (Number)
// - Undefined
// - Null
// - Object
// - Array

// String: A sequence of characters enclosed in quotes
let greeting = "Hello, World!";

// Integer (Number): Represents both integers
let year = 2026;

// Boolean: Represents true or false
let isJavaScriptFun = true;

// Float (Number): Represents floating-point numbers
let temperature = 98.6;

// For now don't worry about undefined, null, objects, and arrays. We will cover those in later lessons.

// === Printing Output in JavaScript ===
// You can print output to the console using the console.log() function.
console.log("Hello, World!"); // This will print "Hello, World!" to the console
console.log("The value of pi is:", pi); // This will print "The value of pi is: 3.14" to the console

// you can also use template literals (enclosed in backticks) to include variables in your output:
console.log(`The value of pi is: ${pi}`); // This will also print "The value of pi is: 3.14" to the console

//note: when useing backticks, you can make the text multi-line without needing to use \n for new lines:
console.log('This is a multi-line \n string .'); // This will print the string on two lines in the console.

console.log(`This is also
a multi-line string .`); // This will print the string on two lines in the console.

// === Running Your Code ===

/* To run your code, hit the "Run" button in the top right corner of the editor.
This will execute your code and display the output in the console at the bottom of the screen.
After you have written your code, run the program to see the output in the console.
You should see a message that includes your favorite color. */