export {};
function error(messages: string): never {
  throw new Error(messages);
}

try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
let bar: never = error('only me');
