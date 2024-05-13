// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer
//     - If the user input is not month name, return "Input is invalid"

let season = "February";

season = season.toLowerCase();

if (season === "january" || season === "february" || season === "december") {
  console.log("season is winter");
} else if (season === "march" || season === "april" || season === "may") {
  console.log("season is Spring");
} else if (season === "june" || season === "july" || season === "august") {
  console.log("season is summer");
} else if (
  season === "september" ||
  season === "october" ||
  season === "november"
) {
  console.log("season is Autumn");
} else {
  console.log("input is invalid");
}
