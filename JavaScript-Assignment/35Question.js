// 35. Write a functions which checks if all items are unique in the array.

let arr = ["car", 5, "bar", 88, "jeansa", -8, 51, "sky", 888, "jeansa"];
let count = 0;
let prev;

function isUnique(value, index, array) {
  return array.indexOf(value) === array.lastIndexOf(value);
}
let result = arr.every(isUnique);
console.log(result);
