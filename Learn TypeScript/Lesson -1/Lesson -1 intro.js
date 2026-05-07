// Static vs Dynamic Typing

// Static typing means that the type of a variable is known at compile time.
// Dynamic typing means that the type of a variable is known at runtime.

// JavaScript is a dynamically typed language, which means that you can change the type of a variable at runtime.

// TypeScript is a statically typed language, which means that the type of a variable is known at compile time.

// This means that TypeScript can catch type errors at compile time, before the code is even run.

// In JavaScript, you can do this:
let x = 5; // x is a number
x = "hello"; // x is now a string

// In TypeScript, you would have to be more explicit:
let y: number = 5; // y is a number
// y = "hello"; // This would cause a compile-time error
y = 10; // This is fine, as 10 is a number

// Dynamic typing can lead to weird senarios where you might accidentally change the type of a variable,
// which can lead to bugs that are hard to track down.

// For example:
console.log(true + true); // This will print 2, because true is treated as 1 in this context
console.log("5" + 5); // This will print "55", because the number 5 is converted to a string and concatenated with "5"

// The advantage of static typing is that it can catch errors early, before the code is even run.
// This can save a lot of time and effort in debugging and maintaining the code.
// It also makes the code more readable and maintainable, as the types are explicitly declared.
// This makes it easier for other developers to understand the code and make changes to it.