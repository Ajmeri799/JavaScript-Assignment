// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F
// let total_num = 37;
// if (80 <= total_num && total_num <= 100) {
//   console.log("Grade : A");
// } else if (70 <= total_num && total_num <= 89) {
//   console.log("Grade : B");
// } else if (60 <= total_num && total_num <= 69) {
//   console.log("Grade : C");
// } else if (50 <= total_num && total_num <= 59) {
//   console.log("Grade : D");
// } else {
//   console.log("Grade : F");
// }
function Grade(total_num) {
  if (80 <= total_num && total_num <= 100) {
    return "A";
  } else if (70 <= total_num && total_num <= 89) {
    return "B";
  } else if (60 <= total_num && total_num <= 69) {
    return "C";
  } else if (50 <= total_num && total_num <= 59) {
    return "D";
  } else {
    console;
  }
}
console.log(Grade(72));
