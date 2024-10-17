"use strict";

// CHALLENGE #1
const calcAverage = (a, b, c) => (a + b + c) / 3;

// Test data 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

// Test data 2
// const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
  } else {
    console.log(`No team wins...`);
  }
};
// checkWinner(scoreDolphins, scoreKoalas);

// CHALLENGE #2
const calcTip = function (value) {
  return 50 <= value && value <= 300 ? value * 0.15 : value * 0.2;
};
const bills = [125, 555, 44];
const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1]),
];
const totals = [
  tips[0] + bills[0],
  tips[1] + bills[1],
  tips[tips.length - 1] + bills[bills.length - 1],
];
// console.log(bills);
// console.log(tips);
// console.log(totals);
