"use strict";

// CHALLENGE #1
// /*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;

// console.log(markHigherBMI);
// */

// CHALLENGE #2
/*
if (markHigherBMI)
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
else console.log(`John's BMI ${BMIJohn} is higher than Mark's (${BMIMark})!`);
*/

// CHALLENGE #3
/*
// Test data 1
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// Data Bonus 1
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// Data Bonus 2
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100)
  console.log("Dolphins win the trophy");
else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100)
  console.log("Koalas win the trophy");
else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100)
  console.log("Both win the trophy");
else console.log("No one wins the trophy");
*/

// CHALLENGE #4
/*
const bill = 275;

const tip = 50 <= bill && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
*/
