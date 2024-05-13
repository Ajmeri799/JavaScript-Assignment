// 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// - The same groups apply to both men and women.
// - Underweight: BMI is less than 18.5
// - Normal weight: BMI is 18.5 to 24.9
// - Overweight: BMI is 25 to 29.9
// - Obese: BMI is 30 or more

function BMI(height, weight) {
  //   let height = number;
  //   let weight = number;
  // let BMIs = weight / (height * height).toFixed(2);
  const BMIs = (weight / ((height * height) / 10000)).toFixed(2);
  return BMIs;
}

let height = 145;
let weight = 50;
let bmi = BMI(height, weight);
console.log(bmi);
if (bmi < 18.6) {
  console.log("You are under wight");
} else if (bmi > 24.9) {
  console.log("You are Overwight");
} else if (18.6 < bmi < 24.9) {
  console.log("You are healthy");
}
