export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknow: unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numberUnknow === 'number') {
  let sumUnknown = numberUnknow + 10;
}
