// User Input

// In this lesson, we will learn how to take user input in JavaScript using the prompt() function.
//  The prompt() function displays a dialog box that prompts the user for input and returns the input as a string.

// Example of using prompt() to take user input:
let name = prompt("What is your name?");
console.log("Hello, " + name + "!"); // This will print "Hello, [name]!" to the console

// You can also use template literals to include the user input in your output:
console.log(`Hello, ${name}!`); // This will also print "Hello, [name]!" to the console

// ParceInt and ParseFloat

// The prompt() function returns user input as a string.
// If you want to work with numbers, you need to convert the string to a number using Number()
// for integers or parseFloat() for floating-point numbers.

// Example of using Number() to convert user input to an integer:
let age =  Number(prompt("How old are you?"));;

// Example of using parseFloat() to convert user input to a floating-point number:
let height = prompt("What is your height in meters?");
height = parseFloat(height);

// Now you can perform calculations with the age and height variables, which are now numbers instead of strings.
age += 1; // This will add 1 to the age variable
console.log(`Next year, you will be ${age} years old.`); // This will print "Next year, you will be [age] years old." to the console

height *= 2; // This will double the height variable
console.log(`Your height doubled is ${height} meters.`); // This will print "Your height doubled is [height] meters." to the console

// === Objects ===//

// An object is a collection of key-value pairs.
// You can create an object using curly braces {}.
// Each key-value pair is separated by a comma.

let person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

// You can access the values in an object using dot notation
console.log(person.name); // This will print "Alice"

// You can also access the values in an object using bracket notation.
console.log(person["age"]); // This will print 30

// You can also modify the values in an object by assigning new values to the keys.
person.city = "Los Angeles";
console.log(person["city"]); // This will print "Los Angeles"

// You can also add new key-value pairs to an object.
person.country = "USA";
console.log(person["country"]); // This will print "USA"

// You can also delete key-value pairs from an object using the delete operator.
delete person.country;
console.log(person["country"]); // This will print undefined

// You can also check if a key exists in an object using the in operator.
console.log("name" in person); // This will print true
console.log("country" in person); // This will print false