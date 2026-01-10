export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work() {
    // 'Hey,guy!This is Atsushi Are you interested in TypeScript? Lets dive into Typescript'
    return `Hey,guy! ${this.firstName}! Are you interested in TypeScript? Lets dive into Typescript`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer);
console.log(Me.work());
