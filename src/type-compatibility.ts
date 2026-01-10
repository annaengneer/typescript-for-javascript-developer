export {};

let fooCampatible: any;

let barCompatible: string = 'TypeScript';

console.log(typeof fooCampatible);

fooCampatible = barCompatible;

console.log(typeof fooCampatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

// fooIncompatible = barIncompatible;

let fooString: string;

let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';

fooString = fooStringLiteral;

let fooNumber: number;
let barNumbarLiteral: 1976 = 1976;

fooNumber = barNumbarLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, 'ハムさん');
