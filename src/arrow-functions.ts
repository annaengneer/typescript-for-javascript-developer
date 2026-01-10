export {};

// let bmi = (height: number, weight: number) => {
//   return weight / (height * weight);
// };

// console.log(1.54, 48);

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * weight);

console.log(1.54, 48);
