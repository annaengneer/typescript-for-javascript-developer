export {};

const reducer = (accumulater: number, currentVaue: number): number => {
  console.log({ accumulater, currentVaue });
  return accumulater + currentVaue;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));

// [1, 2, 3, 4].reduce(reducer);
