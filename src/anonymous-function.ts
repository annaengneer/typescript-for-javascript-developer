export {};

let bmi: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * weight);
};

console.log(1.54, 48);
