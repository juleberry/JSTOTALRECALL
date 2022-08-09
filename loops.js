// JSTOTALRECALL
// Group: Aminah Pitt, Courtney Moreland, Jule Berry, and Naima Kearney
// ----------------
// ---- LOOPS ----
// ----------------

  // THE BASICS
  // Write a loop that will print out all the numbers from 0 to 10, inclusive
  for(let i = 0; i < 11; i++) {
    console.log(i);
  }
  
// Write a loop that will print out all the numbers from 10 up to and including 400
for(let i = 10; i < 401; i++) {
  console.log(i);
}

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
for(let i = 12; i <= 4000; i++) {
  if (i % 3 === 0) {
  console.log(i);
  }
}

// ------------------
// ---- GET EVEN ----
// -----------------

for(let i = 1; i < 101; i++) {
  if (i % 2 === 0) {
    console.log(i + " <--is an even number");
  } else {
    console.log(i);
  }
}

// ------------------
// -- GIVE ME FIVE --
// ------------------
for(let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log("I found a " + i + ". High five!");
  }
  if (i % 3 === 0) {
    console.log("I found a " + i + ". Three is a crowd");
  }
}

// -------------------
// - SAVINGS ACCOUNT -
// -------------------

let bank_account = 0
for (let i = 0; i < 11; i++) {
  bank_account = bank_account += i
}
console.log(bank_account);

bank_account = 0
for (let i = 0; i < 101; i++) {
  bank_account = bank_account += i * 2
}
console.log(bank_account);