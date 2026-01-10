export {};

const nextYearSalary = (currentSalary: number, rate: number) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.05));
