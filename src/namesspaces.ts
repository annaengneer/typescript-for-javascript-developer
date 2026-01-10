export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}
namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('ハムさん');
console.log(me);

const me2 = new Japanese.Osaka.Person('ハムやん');
console.log(me2);

const michel = new English.Person('Michel', 'joseph', 'jackson');
console.log(michel);
