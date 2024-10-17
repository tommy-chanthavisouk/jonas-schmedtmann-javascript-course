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

const descFrance = describeCountry(countryFRA, populationFRA, capitalCityFRA);
const descBelgium = describeCountry(countryBEL, populationBEL, capitalCityBEL);
const descGermany = describeCountry(countryGER, populationGER, capitalCityGER);

// console.log(descFrance);
// console.log(descBelgium);
// console.log(descGermany);

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
