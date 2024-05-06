// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

function Even(number) {
  return number % 2 === 0;
}
let r1 = Even(65);
let r2 = Even(2);

console.log(r1);
console.log(r2);
