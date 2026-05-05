// Now use all of the concepts we've learned to create a simple word guessing game.
// The game will have the following features:
 /*
  1. A random word is generated and the program prints its length.
  2. The user guesses a word
  3. if the guessed word isn't the correct length, the program tells the user.
  4. The program adds the word to an array of words that have been guessed and prints the array.
  5. The game reveals whether the guessed word is correct
  6. The user continues until they guess the word
*/

// For now don't worry about this code, Well learn it later on
import {GenerateRandomWord} from './Random Words';
// for now, just know that we are importing a function to generate a random word.
// To use the imported function, we can call it like this:
const { word, length } = GenerateRandomWord();
// This will give us the random word and its length.

// Put your code below this line: