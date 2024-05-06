// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array

import { country } from "./24Question/countries.mjs";

// solution here
let xy = countries.includes("land");
console.log(xy);
function coun_FourChar(countries) {
  return countries.filter((country) => country.length === 4);
}
function countr_More(countries) {
  return countries.filter((country) => country.includes(" "));
}
let reversed = countries.reverse();
let cap_con = reversed.map((country) => country.toUpperCase());

coun_FourChar(countries);
countr_More(countries);
