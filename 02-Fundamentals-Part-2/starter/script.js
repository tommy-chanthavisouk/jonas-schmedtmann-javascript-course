//////////////////////////////////////////////////
// Activating Strict Mode
"use strict";
/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;
*/

//////////////////////////////////////////////////
// Functions
/*
function logger() {
  console.log("My name is Tommy");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/

//////////////////////////////////////////////////
// Functions Declarations vs. Expressions
/*
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1990);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1990);

console.log(age1, age2)
*/

//////////////////////////////////////////////////
// Arrow Functions
/*
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1990, "Tommy"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

//////////////////////////////////////////////////
// Functions Calling Other Functions
/*
const cutFruitPieces = (fruit) => fruit * 4;

const fruitProcessor = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};
console.log(fruitProcessor(2, 3));
*/

//////////////////////////////////////////////////
// Reviewing Functions
/*
const calcAge = (birthYear) => 2037 - birthYear;

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
};
console.log(yearsUntilRetirement(1990, "Tommy"));
console.log(yearsUntilRetirement(1950, "Mike"));
*/

//////////////////////////////////////////////////
// Introduction to Arrays
/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ["Bob", "Alice"];

const firstName = "Tommy";
const tommy = [firstName, "Chanthavisouk", 2037 - 1990, "student", friends];
console.log(tommy);
console.log(tommy.length);

// Exercise
const calcAge = (birthYear) => 2037 - birthYear;
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

//////////////////////////////////////////////////
// Basic Array Operations (Methods)
/*
const friends = ["Michael", "Steven", "Peter"];

// Add elements
// push() and unshift() return length of the array
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements
friends.pop(); // Last element
// pop() return the removed element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First element
console.log(friends);

// Find index of element
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); // -1 if not found

// Find if element in array
friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23)); // Strict equality

if (friends.includes("Steven")) {
  console.log(`You have a friend called Steven`);
}
*/

//////////////////////////////////////////////////
// Introduction to Objects
/*
const tommy = {
  firstName: "Tommy",
  lastName: "Chanthavisouk",
  age: 2037 - 1990,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(tommy);
*/

//////////////////////////////////////////////////
// Dot vs. Bracket Notation
/*
const tommy = {
  firstName: "Tommy",
  lastName: "Chanthavisouk",
  age: 2037 - 1990,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(tommy);

console.log(tommy.lastName);
console.log(tommy["lastName"]);

const nameKey = "Name";
console.log(tommy["first" + nameKey]);
console.log(tommy["last" + nameKey]);

// Error! Use brackets to compute an expression
// console.log(tommy.'first' + nameKey)

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
// );
const interestedIn = "location";

if (tommy[interestedIn]) console.log(tommy[interestedIn]);
else
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );

tommy.location = "France";
tommy["twitter"] = "@tommychanthavisouk";
console.log(tommy);

// Challenge
console.log(
  `${tommy.firstName} has ${tommy.friends.length} friends, and his best friend is called ${tommy.friends[0]}`
);
*/

//////////////////////////////////////////////////
// Object Methods
/*
const tommy = {
  firstName: "Tommy",
  lastName: "Chanthavisouk",
  birthYear: 1990,
  job: "student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicence: false,

  // Methods
  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicence ? "a" : "no"} driver's licence`;
  },
};
console.log(tommy.calcAge());

console.log(tommy.age);
console.log(tommy.age);
console.log(tommy.age);

// Challenge
console.log(tommy.getSummary());
// console.log(tommy["getSummary"]());
*/

//////////////////////////////////////////////////
// Iteration: The for Loop
/*
// console.log(`Lifting weights repetition 1 🏋️`);
// console.log(`Lifting weights repetition 2 🏋️`);
// console.log(`Lifting weights repetition 3 🏋️`);
// console.log(`Lifting weights repetition 4 🏋️`);
// console.log(`Lifting weights repetition 5 🏋️`);
// console.log(`Lifting weights repetition 6 🏋️`);
// console.log(`Lifting weights repetition 7 🏋️`);
// console.log(`Lifting weights repetition 8 🏋️`);
// console.log(`Lifting weights repetition 9 🏋️`);
// console.log(`Lifting weights repetition 10 🏋️`);

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
}
*/
