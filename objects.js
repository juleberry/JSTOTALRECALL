// JSTOTALRECALL - W3D2
// Group: Aminah Pitt, Courtney Moreland, Jule Berry, and Naima Kearney
// -------------------
// ---- OBJECTS ----
// -------------------

// MAKE A USER OBJECT
const user = {
  name: 'Shelly',
  email: 'shelly@shelly.com',
  age: 22,
  purchased: [],
}

// UPDATE THE USER
user.email = 'shellyc@shelly.net'
console.log(user.email);

user.age++;
console.log(user.age)

// ADDING KEYS AND VALUES
user.location = 'DC';
console.log(user.location);

// SHOPAHOLIC!
user.purchased.push('carbohydrates');
user.purchased.push('peace of mind');
user.purchased.push('Merino jodhpurs');

console.log(user.purchased.indexOf('Merino jodhpurs'));
console.log(user.purchased[2]);

// OBJECT-WITHIN-OBJECT
user.friend = {
  name: "Grace Hopper",
  age: 85,
  location: 'MD',
  purchased: []
}

console.log(user.friend.name)
console.log(user.friend.location)
user.friend.age = 55;
user.friend.purchased.push('The One Ring');
user.friend.purchased.push('A latte');
console.log(user.friend.purchased.indexOf('A latte'));
console.log(user.friend.purchased[1]);

console.log('-----------------------');

// LOOPS 1 -- iterate over User's purchased array
for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}

console.log('-------------------');

// LOOPS 2 -- iterate over Friend's purchased array
for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}

// FUNCTIONS CAN OPERATE ON OBJECTS
const updateUser = () => {
  user.age++;
  user.name.toUpperCase();
  console.log(user.name);
}

const oldAndLoud = (person) => {
  person.age++;
  person.name.toUpperCase();
  console.log(person.name);
}

oldAndLoud(user);