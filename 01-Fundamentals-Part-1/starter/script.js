// Values and Variables
/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Tommy");
console.log(23);

let firstName = "Tommy";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

// Data Types
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Tommy");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1990;
console.log(typeof year);

console.log(typeof null);
*/

// let, const and var
/*
let age = 30;
age = 31;

const birthYear = 1990;
birthYear = 1989;
const job;

var job = "programmer";
job = "teacher";

// Don't - Create property on Global object
lastName = "Chanthavisouk";
console.log(lastName);
*/

// Basic Operators
/*
// Math operators
const now = 2037;
const ageTommy = now - 1990;
const ageSarah = now - 2018;
console.log(ageTommy, ageSarah);

// 2 ** 3 means to the power of 3 = 2 * 2 * 2;
console.log(ageTommy * 2, ageTommy / 10, 2 ** 3);

const firstName = "Tommy";
const lastName = "Chanthavisouk";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageTommy > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);
*/

// Operator Precedence
/*
const now = 2037;
const ageTommy = now - 1990;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageTommy + ageSarah) / 2;
console.log(ageTommy, ageSarah, averageAge);
*/

// Strings and Template Literals
/*
const firstName = "Tommy";
const job = "programmer";
const birthYear = 1990;
const year = 2024;

const tommy =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(tommy);

const tommyNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(tommyNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
mutliple \n\
lines"
);

console.log(`String with
multiple
lines`);
*/

// Taking Decisions: if / else Statements
/*
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving licence 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

// Type Conversion and Coercion
/*
// type conversion
const inputYear = "1990";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Tommy"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);
*/

// Truthy and Falsy Values
/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); //false
console.log(Boolean("Tommy")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

const money = 100;
if (money) console.log("Don't spend it all ;)");
else console.log("You should get a job!");

let height = 0;
if (height) console.log("YAY! Height is defined");
else console.log("Height is UNDEFINED");
*/

// Equality Operators: == vs. ===
/*
const age = 18;
if (age === 18) console.log("You just became an adult :D (strict)");
if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
// const favourite = Number("23");
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) console.log("Cool! 23 is an amazing number");
else if (favourite === 7) console.log("7 is also a cool number");
else if (favourite === 9) console.log("9 is also a cool number");
else console.log("Number is not 23 or 7 or 9");

if (favourite !== 23) console.log("Why not 23?");
*/

// Logical Operators
/*
const hasDriversLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) console.log("Sarah is able to drive!");
// else console.log("Someone else should drive...");

const isTired = false; // C
console.log(hasDriversLicence && hasGoodVision && isTired);

if (hasDriversLicence && hasGoodVision && !isTired)
  console.log("Sarah is able to drive!");
else console.log("Someone else should drive...");
*/
