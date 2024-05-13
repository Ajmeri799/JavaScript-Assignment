// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let date = new Date();
// console.log(date.toDateString());
console.log("Year today :", date.getFullYear());
console.log("Month today as a num : ", date.getMonth());
console.log("today date is :", date.getDate());
console.log("today day is :", date.getDay());
console.log("now hours :", date.getHours());
console.log("minutes :", date.getMinutes());
// console.log("current sec :", date.getSeconds());

const current_time = Date.now();

console.log(
  " elapsed seconds from January 1, 1970 to now:",
  Math.floor(current_time / 1000)
);
