// JSTOTALRECALL
// Group: Aminah Pitt, Courtney Moreland, Jule Berry, and Naima Kearney
// ---------------------------
// -- ARRAYS & CONTROL FLOW --
// ---------------------------

/* A.
What are the things in an array called?
  Elements

Do Arrays guarantee those things will be in order?
  No

What real-life thing could you model with an array?
  A list of students
*/

// Easy Does It
const quotes = [
  'Time is Money',
  'I came, I saw, I conquered.',
  'Practice makes perfect.'
]

// Accessing elements
const randomThings = [1, 10, "Hello", true]
randomThings[0];
randomThings[2] = 'World';
console.log(randomThings[2]);
console.log(randomThings);

// Change values
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[2];
ourClass[4] = 'Octocat';
ourClass.push('Cloud City');
console.log(ourClass);

// Mix It Up
const myArray = [5, 10, 500, 20]
myArray.push('Aegon');
myArray.push('Harry Potter');
myArray.shift();
myArray.unshift('Bob Marley');

myArray.pop();
console.log(myArray);
myArray.reverse();
console.log(myArray);

// BIGGIE SMALLS
let biggieSmalls = 7;
if (biggieSmalls < 100) {
  console.log('little number')
} else if (biggieSmalls >= 100) {
  console.log('big number')
}

// Monkey in the Middle
let monkey = 13
if (monkey < 5) {
  console.log('little number')
} else if (monkey > 10) {
  console.log('big number')
} else {
  console.log('monkey');
}

// What's in Your Closet?
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!');
kristynsCloset.splice(6, 0, 'raybans')
console.log(kristynsCloset);
kristynsCloset[5] = 'stained knit hat';
console.log(kristynsCloset)

console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ', ' + thomsCloset[1][1] + ' and ' + thomsCloset[2][1] + '!')

thomsCloset[1][2] = 'Footie Pajamas'
console.log(thomsCloset)