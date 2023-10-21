Learning JS project - Cazino Slot Machine.

Takeaways:

1. Node.js prompt library

const prompt = require("prompt-sync")();
  
In order to get input from the user in terminal and store it in the variable, you need to:

const exampleVariable = prompt("What input you ask for: ");

this line will prompt the user for the value and then store it in teh const exampleVariabe.

2. In order to test functions, you need to create a const with the value of function call and console log it.

const test = testFunction();
console.log(test);

3. while(true) is a way to prompt a user for specific kind of input untill they satisfy the requirments, if they satisfy you can break the loop with the return statement.

