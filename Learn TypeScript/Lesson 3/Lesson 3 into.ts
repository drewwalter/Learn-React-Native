// This lesson is about union types and type aliases in TypeScript.

// A union type allows a variable to be one of several different types.
// For example, a variable can be either a string or a number.
type StringOrNumber = string | number;

// You can use a union type to specify that a variable can be one of several types.
let value: StringOrNumber = "hello"; // This is valid
value = 42; // This is also valid

// This is useful when you want to allow a variable to be one of a few different types.

// If you try to assign a value of a different type, TypeScript will give you an error.
// value = true; // This would cause a TypeScript error

// Prompt also requires union types.

let userInput: string | null = prompt("What is the capital of France?"); // This is valid

// but if you dont want the user do be able to type null you can do
let onlyString: string = prompt("What is the capital of France?") ?? "";

// because the user might not provide any input, TypeScript makes use of union types to handle this case.

// You can also use union types in function parameters and return types.
function processValue(input: StringOrNumber): StringOrNumber {
    // Do something with the input
    return input;
}

// For example, you can use it to create a function that can accept either a string or a number.
processValue("hello"); // This is valid
processValue(42); // This is also valid

// You can also use union types to define the return type of a function.
function getReturnValue(): StringOrNumber {
    // Return a value of either type
    return "hello"; // This is valid
}

getReturnValue(); // This is valid

// You can also use union types in Arrays.
type StringOrNumberArray = (string | number)[];

const myArray: StringOrNumberArray = ["hello", 42, "world", 100];

console.log(myArray); // This is valid

// A type alias is a way to give a type a name.
// This can make your code more readable and maintainable.
type UserId = string;

// For example, you can use a type alias to define a more descriptive name for a complex type.
type User = {
    id: UserId;
    name: string;
    email: string;
};

const user: User = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com"
};

// The user variable is now of type User, which makes the code more readable and maintainable.
// This makes it easier to understand the structure of the data and helps prevent errors.