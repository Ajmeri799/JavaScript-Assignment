// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

function sort_arr(array) {
  for (j = 0; j < array.length; j++) {
    for (i = 0; i <= array.length; i++) {
      if (array[i] > array[i + 1]) {
        let Temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = Temp;
      }
    }
  }
  return array;
}
function avg(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i] / array.length;
  }
  return sum;
}

// ---------------MIN---------------
let min = Math.min(...ages);
console.log(min);

let max = Math.max(...ages);
console.log(max);
// ---------range-----------
let range = max - min;
console.log(range);

// let middle = ages.length / 2;
// console.log(ages[middle]);
console.log(avg(ages));
console.log(sort_arr(ages));
