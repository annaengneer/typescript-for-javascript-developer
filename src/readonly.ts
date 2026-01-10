export {};

class VisaVard {
  constructor(public readonly owner: string) {}
}
let myVisaCard = new VisaVard('ハムさん');

console.log(myVisaCard.owner);
// myVisaCard ="ベーコン"
