// JSTOTALRECALL
// Group: Aminah Pitt, Courtney Moreland, Jule Berry, and Naima Kearney
// -------------------
// ---- FUNCTIONS ----
// -------------------

// PRINT GREETING
const printGreeting = (name) => {
  return `Hello there, ${name}!`
}
console.log(printGreeting('Slimer'));


// PRINT COOL
const printCool = (name) => {
  return `${name} is cool`
}
console.log(printCool('Captain Reynolds'));

// CALCULATE CUBE
const calculateCube = (num) => {
  return num * num * num
}
console.log(calculateCube(5));

// IS VOWEL
const isVowel = (char) => {
  if (char.toLowerCase() === 'a' || char.toLowerCase() === 'e' || char.toLowerCase() === 'i' || char.toLowerCase() === 'o' || char.toLowerCase() === 'u') {
    return true
  } else {
    return false
  }
}
console.log(isVowel("A"))
console.log(isVowel("a"))
console.log(isVowel("E"))
console.log(isVowel("e"))
console.log(isVowel("I"))
console.log(isVowel("i"))
console.log(isVowel("O"))
console.log(isVowel("o"))
console.log(isVowel("U"))
console.log(isVowel("u"))
console.log(isVowel("Z"))
