// 23. Write a program which tells the number of days in a month, now consider leap year.

let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let a = 1;
let year = 2021;
function day_m(month, year) {
  let day = new Date(year, month, 0).getDate();
  return day;
}
console.log(day_m(a, year));
if (year % 4 === 0) {
  console.log("year is leap year");
} else {
  console.log("year is not leap year");
}
