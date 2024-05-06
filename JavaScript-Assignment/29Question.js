// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

function even_num(number) {
  for (let i = 0; i <= number; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
  }
  return sum;
}
function odd_num(number) {
  sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 2 !== 0) {
      sum = sum + i;
    }
  }
  return sum;
}

let even_values = even_num(100);
console.log("sum of evens :", even_values);
let odd_values = even_num(100);
console.log("sum of odds :", odd_values);
// ----------------

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    // Even number
    sumEven += i;
  } else {
    // Odd number
    sumOdd += i;
  }
}
console.log("even", sumEven);
