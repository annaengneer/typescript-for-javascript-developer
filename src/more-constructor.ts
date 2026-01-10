export {};

class Person {
  //   public name: string;
  //   protected age: number;

  constructor(public name: string, public age: number) {
    // this.name = name;
    // this.age = age;
  }
}

const me = new Person('ハムさん', 43);
console.log(me);
