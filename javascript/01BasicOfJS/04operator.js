/*

 * There are different types of JavaScript operators:

          1.Arithmetic Operators
          2.Assignment Operators
          3.Comparison Operators
          4.String Operators
          5.Logical Operators
          6.Bitwise Operators
          7.Ternary Operators

*/

// Arithmetic operator
// + , - , / , * , % ,++ , --

let a = 10;
let b = 20 ;

console.log("Addition = " + (a+b));
console.log("Subtraction = " + (a-b));
console.log("Multiplication = " + (a*b));
console.log("Division = " + (a/b));
console.log("Reminder = " + (a%b));
console.log("Increment = " + (++a));
console.log("Decrement = " + (--a));

// Assignment Operators
// = ,+= , -= , *= , /= , %=

let x = 5;

x += 10; // same as x+10
console.log(x); // output = 15

x -= 10 ; // same as x-10
console.log(x); // output = 5

x *= 2; // same as x*2
console.log(x); // output = 10

x /= 2 ; // same as x/2
console.log(x); // output = 5

x %= 2; // same as x%2
console.log(x);// output = 1

// typeof operator returns the data type of that variable

let p; 
console.log(typeof p);      // Now p is undefined

p = 5;
console.log(typeof p);      // Now p is a Number

p = "John";
console.log(typeof p);  // Now p is a String
