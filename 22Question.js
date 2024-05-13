// 22. Write a program which tells the number of days in a month.

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
let a = 2;
let year = 2022;

function day_m(month, year) {
  let day = new Date(year, month, 0).getDate();
  return day;
}
console.log(day_m(a, year));
