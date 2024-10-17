"use strict";

// Functions
// France
const countryFRA = "France";
let populationFRA = 67;
const capitalCityFRA = "Paris";

// Belgium
const countryBEL = "Belgium";
let populationBEL = 12;
const capitalCityBEL = "Brussels";

// Germany
const countryGER = "Germany";
let populationGER = 85;
const capitalCityGER = "Berlin";

// China
const countryCHN = "China";
let populationCHN = 1419;
const capitalCityCHN = "Beijing";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const descFrance1 = describeCountry(countryFRA, populationFRA, capitalCityFRA);
const descBelgium1 = describeCountry(countryBEL, populationBEL, capitalCityBEL);
const descGermany1 = describeCountry(countryGER, populationGER, capitalCityGER);
const descChina1 = describeCountry(countryCHN, populationCHN, capitalCityCHN);

// console.log(descFrance);
// console.log(descBelgium);
// console.log(descGermany);
// console.log(descChina1);

// Function Declarations vs. Expressions
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const percFrance1 = percentageOfWorld1(populationFRA);
const percBelgium1 = percentageOfWorld1(populationBEL);
const percGermany1 = percentageOfWorld1(populationGER);
const percChina1 = percentageOfWorld1(populationCHN);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percFrance2 = percentageOfWorld2(populationFRA);
const percBelgium2 = percentageOfWorld2(populationBEL);
const percGermany2 = percentageOfWorld2(populationGER);
const percChina2 = percentageOfWorld2(populationCHN);

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percFrance3 = percentageOfWorld3(populationFRA);
const percBelgium3 = percentageOfWorld3(populationBEL);
const percGermany3 = percentageOfWorld3(populationGER);
const percChina3 = percentageOfWorld3(populationCHN);

// console.log(percFrance1, percFrance2, percFrance3);
// console.log(percBelgium1, percBelgium2, percBelgium3);
// console.log(percGermany1, percGermany2, percGermany3);
// console.log(percChina1, percChina2, percChina3);

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  const description = `${country} has ${population} million people, which is about ${percentage}% of the world`;

  return description;
};

const descFrance2 = describePopulation(countryFRA, populationFRA);
const descBelgium2 = describePopulation(countryBEL, populationBEL);
const descGermany2 = describePopulation(countryGER, populationGER);
const descChina2 = describePopulation(countryCHN, populationCHN);

// console.log(descFrance2);
// console.log(descBelgium2);
// console.log(descGermany2);
// console.log(descChina2);

// Introduction to Arrays
const populations = [
  populationFRA,
  populationBEL,
  populationGER,
  populationCHN,
];
// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populationFRA),
//   percentageOfWorld1(populationBEL),
//   percentageOfWorld1(populationGER),
//   percentageOfWorld1(populationCHN),
// ];
const percentages = [percFrance1, percBelgium1, percGermany1, percChina1];

// console.log(percentages);

// Basic Array Operations (Methods)
// /*
const neighbours = [countryBEL, countryGER];

neighbours.push("Utopia");
// console.log(neighbours);

neighbours.pop();
// console.log(neighbours);

// if (!neighbours.includes("Germany")) {
//   console.log(`Probably not a central european country :D`);
// }

const indexNeighbour = neighbours.indexOf("Belgium");
neighbours[indexNeighbour] = "Republic of Belgium";
// console.log(neighbours);
