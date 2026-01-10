export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// const MonthJS = {
//   January: 0,
//   February: 1,
// };

// console.log(MonthJS.January);
// console.log(MonthJS.February);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#fff',
  GREEN = '#008000',
  BULE = '0000FF',
  //   YELLOW = '#FFFF00',
  BLACK = '#00000',
}

let green = COLORS.GREEN;

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}
console.log(green);

COLORS.YELLOW;
COLORS.GRAY;
