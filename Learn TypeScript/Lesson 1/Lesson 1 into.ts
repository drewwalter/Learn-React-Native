// This lesson is about arrays in TypeScript.
// In TypeScript, you can define arrays with specific types for their elements.
// This helps ensure type safety and prevents runtime errors.

// Example: Define an array of strings
let stringArray: string[] = ["apple", "banana", "cherry"];

// Example: Define an array of numbers
let numberArray: number[] = [1, 2, 3, 4, 5];

// Example: Define an array of booleans
let booleanArray: boolean[] = [true, false, true];

// Example: Define an array of any type
let anyArray: any[] = ["apple", 1, true];

// you can also define arrays with a a generic array type.
let genericArray: Array<string> = ["apple", "banana", "cherry"];

// you can also define arrays with a union type (we will learn about this in a later lesson) for each element.
let mixedArray: (string | number)[] = ["apple", 1, "banana", 2];