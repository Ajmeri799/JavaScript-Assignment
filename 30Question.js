// 30. Write a script which generates a random hexadecimal number.

let range = 1000;
let hexa = Math.floor(Math.random() * 10);
console.log(hexa);
function generateRandomHexadecimal(length) {
  const characters = "0123456789ABCDEF";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

// Example usage:
const length = 6; // You can adjust the length as needed
const randomHex = generateRandomHexadecimal(length);
console.log("Random hexadecimal number:", randomHex);
