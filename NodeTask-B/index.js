// Import the custom module
const replaceWord = require('./text-utilities/helloTohi');

// Input text
const inputText = "Hello folks! This is a hello program designed to say Hello.";

// Replace "hello" with "hi"
const updatedText = replaceWord(inputText, "hello", "hi");

console.log("Original Text:", inputText);
console.log("Updated Text:", updatedText);