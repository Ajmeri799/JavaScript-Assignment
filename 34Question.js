// 34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function equation(a, b, c, variable) {
  if (a === 0 && b === 0) {
    return "invalid eqation";
  }
  if (variable === "x") {
    let result = (-c - b) / a;
    return result;
  }
  if (variable === "y") {
    let result = (-c - a) / b;
    return result;
  }
}

const a = 2;
const b = -3;
const c = 6;

const x = equation(a, b, c, "x");
const y = equation(a, b, c, "y");

console.log("Value of x:", x);
console.log("Value of y:", y);
