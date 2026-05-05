// In this lesson, we will learn about arrays in JavaScript.

// An array is a data structure that can hold multiple values. In JavaScript, arrays are ordered and indexed,
// meaning each element has a specific position in the array.


// Here's how you can create an array in JavaScript:
let myArray = [1, 2, 3, 4, 5];
let empty = [];

// You can access values in an array by using their index.
// The index starts at 0 for the first element.
myArray[0]; // 1
myArray[1]; // 2

// You can also change the value of an element by using its index.
myArray[0] = 10;

// The length property returns the number of elements in the array.
myArray.length; // 5

// You can add elements to the end of an array with push() and remove them with pop().
myArray.push(6); // [10, 2, 3, 4, 5, 6]
myArray.pop();   // [10, 2, 3, 4, 5]

// You can add elements to the start of an array with unshift() and remove them with shift().
myArray.unshift(0); // [0, 10, 2, 3, 4, 5]
myArray.shift();    // [10, 2, 3, 4, 5]

// You can remove or add elements at any position in the array with splice().
myArray.splice(2, 1);     // remove 1 item at index 2 → [10, 2, 4, 5]
myArray.splice(2, 0, 3);  // add 3 at index 2 → [10, 2, 3, 4, 5]

// You can copy a portion of an array with slice().
let part = myArray.slice(1, 4); // [2, 3, 4]

// You can convert an array to a string with join() or toString().
myArray.join(", "); // "10, 2, 3, 4, 5"
myArray.toString(); // "10,2,3,4,5"

// You can find the index of an element in an array with indexOf(), lastIndexOf(), or includes().
myArray.indexOf(3);      // 2
myArray.lastIndexOf(3);  // 2
myArray.includes(3);     // true

// The every() method tests whether all elements in the array pass the test implemented by the provided function.
myArray.every(n => n > 0);      // true

// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
myArray.some(n => n % 2 === 0); // true