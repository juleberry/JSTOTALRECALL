// JSTOTALRECALL
// Group: Aminah Pitt, Courtney Moreland, Jule Berry, and Naima Kearney
// -----------------------
// Variables & Datatypes
// -----------------------
/* 
---- Q & A ----
1. How do we assign a value to a variable?
  using the assignment "=" operator
    Ex: let apple = 3;

2. How do we change the value of a variable?
  Setting the variable to another value with the assignment operator
    Ex: apple = 4;

3. How do we assign an existing variable to a new variable?
  Setting the variable to another name with the assignment operator
    Ex: apple = banana;

4. Remind me, what are declare, assign, and define?
  assign - getting rid of the old value of a variable and replacing it with a new one
  declare - determine the type of the variable
  define - giving the variable an initial value

5. What is pseudocoding and why should you do it?
  mapping out a design in "plain English" without any actual coding
  pseudocoding helps organize your ideas

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
  80% planning, 20% coding

*/
//------------------
// ---- STRINGS ----
//--------------------
let firstVariable = 'Hello World';
firstVariable = 4;
let secondVariable = firstVariable;
secondVariable = 'Good Morning';
// console.log(firstVariable);
// firstVariable is 4
let yourName = 'Jule';
// console.log('Hello, my name is ' + yourName + '.');

// ---- BOOLEANS ----
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false);
  console.log(false && false && false && false && false || true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');

  // -----------------
  // ---- THE FARM ----
  // ------------------
  let animal = 'pig';
  if (animal === 'cow') {
    console.log('moooooo')
  } else {
    console.log("Hey! You're not a cow.");
  }