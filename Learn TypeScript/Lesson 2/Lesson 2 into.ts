// This lesson is about functions in TypeScript.

// A function in TypeScript is the same as in JavaScript,
// but with the added benefit of type annotations.

// Example of a simple function in TypeScript:
function addNumbers(a: number, b: number): number {
    return a + b;
}

// Example of a function that takes no parameters and returns a string:
function sayHello(): string {
    return "Hello, World!";
}

// Example of a function that takes a string parameter and returns a string:
function greetUser(name: string): string {
    return `Hello, ${name}!`;
}

// Some functions in TypeScript can also have default parameter values.
function printValues(a: string = "default", b: number = 0): void {
    console.log(a, b);
}

// The 'void' return type indicates that the function does not return a value.
// This is useful for functions that perform actions like logging or updating state,
// but don't need to return a result.