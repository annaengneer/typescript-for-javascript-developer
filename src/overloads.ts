export {};

function double(values: number): number;

function double(values: string): string;

function double(values: any): any {
  console.log(typeof values);
  if (typeof values == 'number') {
    return values * 2;
  } else {
    return values + values;
  }
}
console.log(double(100));
console.log(double('Go '));
// console.log(double(true));

// function double(values: string): string {
//   return values + values;
// }
