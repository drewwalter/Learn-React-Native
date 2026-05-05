// This is an intro to JSX and TSX.

// JSX (JavaScript XML) is a syntax extension for JavaScript that allows
// you to write HTML-like code in your JavaScript files.

// TSX (TypeScript XML) is the TypeScript version of JSX,
// which adds type safety to your React components.

// TSX is the foundation of modern React development with TypeScript.

// This is a simple example of TSX:
const element = <h1>Hello, World!</h1>;

// You can see that there are red lines under the JSX code, indicating potential errors.
// However there is actually no error in this case, as the code is valid.
// Because this is a TypeScript file, the TypeScript compiler will check the code for type errors.
// However React will compile the code and it will have no errors.

// A TSX component is a variable that has HTML-like syntax and can be used to create reusable UI elements.

// In TSX, you can also use type annotations to specify the types of props and state.
// For example:
interface MyComponentProps {
  name: string;
  age: number;
}

const MyComponent: React.FC<MyComponentProps> = ({ name, age }) => {
  return <div>{name} is {age} years old.</div>;
};

// But this is just for React.JS. In React Native, There are some differences.
// For example, in React Native, you would use components like View, Text, and Image
// instead of div, p, and img.

// To render a component in React Native, you would use the AppRegistry to register your app.

// For example, in React Native, you would use the following code to register your app:

import { AppRegistry } from 'react-native';
AppRegistry.registerComponent('MyApp', () => MyComponent);

// This will register your component as the main component for your React Native app.
// The component will then be rendered as the main screen of your React Native app.

// This is just the basics and React Native is far more complex than this.

// But this is just lesson 0.