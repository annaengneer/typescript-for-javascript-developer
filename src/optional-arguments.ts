export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * weight);
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(153, 50, true);

// bmi(身長、体重をコンソールで出力するかどうか)
// bmi(153, 50);

// bmi(153, 50, true);
// bmi(153, 50, false);
