// Introduction to TypeScript
// TypeScript is a statically typed programming language that builds on JavaScript.
// It adds static typing to JavaScript, which helps catch errors at compile time.

// === Basic Types in TypeScript ===
// 1. string - for text
// 2. number - for numbers
// 3. boolean - for true or false
// 4. void - for functions that don't return a value
// 5. undefined - for variables that haven't been assigned a value
// 6. null - for explicitly null values
// 7. any - for values that can be of any type
// 8. unknown - for values whose type is not known
// and more...

//Example
let myString: string = "Hello, World!"; // Explicitly typed
let myNumber: number = 42; // Explicitly typed
let myBoolean: boolean = true; // Explicitly typed
let myNull: null = null; // Explicitly typed as null
let myUndefined: undefined = undefined; // Explicitly typed as undefined
let myAny: any = "I can be anything!"; // Explicitly typed as any
// You just add the type annotation after the variable name and a colon.

// === Type Inference ===
// TypeScript can often infer the type of a variable based on its initial value.
// For example, if you declare a variable with a string value, TypeScript will infer that the variable is of type string.
// This means you don't always have to explicitly declare the type of a variable.

let myInferredString = "Hello, World!"; // Inferred as string
let myInferredNumber = 42; // Inferred as number
let myInferredBoolean = true; // Inferred as boolean
let myInferredNull = null; // Inferred as null
let myInferredUndefined = undefined; // Inferred as undefined
let myInferredAny = "I can be anything!"; // Inferred as any

// In this example, the types are inferred from the initial values.
// (Though it's generally better to be explicit about types for clarity and maintainability.)

// === Type Assertion ===
// Type assertion is a way to tell the TypeScript compiler to treat a value as a specific type.
// It's useful when you know more about the type of a value than TypeScript does.

let myValue2: any = "Hello, World!";
let myString2 = myValue2 as string; // Asserting that myValue2 is a string
let myNumber2 = myValue2 as number; // Asserting that myValue2 is a number
let myBoolean2 = myValue2 as boolean; // Asserting that myValue2 is a boolean
let myNull2 = myValue2 as null; // Asserting that myValue2 is null
let myUndefined2 = myValue2 as undefined; // Asserting that myValue2 is undefined

// Type assertion is a way to explicitly tell the TypeScript compiler what type a value should be treated as.
// It's a way to override the type that TypeScript has inferred.
// This is particularly useful when you have a value of type 'any' or 'unknown' and you want to be more specific about its type.

// === Type Guards ===
// Type guards are a way to narrow down the type of a variable at runtime.
// They help ensure that you're working with the correct type of data.
// Type guards are typically used with conditional statements to check the type of a variable before using it.
// For example, you can use an 'if' statement to check if a variable is of a specific type before performing operations on it.
if (typeof myValue2 === "string") {
    console.log(myValue2.length); // TypeScript now knows myValue2 is a string
}
if (typeof myValue2 === "number") {
    console.log(myValue2.toFixed(2)); // TypeScript now knows myValue2 is a number
}
if (typeof myValue2 === "boolean") {
    console.log(myValue2); // TypeScript now knows myValue2 is a boolean
}
if (typeof myValue2 === "object" && myValue2 !== null) {
    console.log(myValue2); // TypeScript now knows myValue2 is an object
}

// Type guards help ensure that your code is working with the correct types, which can prevent runtime errors.