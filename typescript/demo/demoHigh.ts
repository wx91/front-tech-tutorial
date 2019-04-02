// 交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。
// function extend<T, U>(first: T, second: U): T & U {
//   let result = <T & U>{};
//   for (let id in first) {
//     (<any>result)[id] = (<any>first)[id];
//   }
//   for (let id in second) {
//     if (!result.hasOwnProperty(id)) {
//       (<any>result)[id] = (<any>second)[id];
//     }
//   }
//   return result;
// }

// class Person {
//   constructor(public name: string) {}
// }
// interface Loggable {
//   log(): void;
// }
// class ConsoleLogger implements Loggable {
//   log() {
//     // ...
//   }
// }
// var jim = extend(new Person("Jim"), new ConsoleLogger());
// var n = jim.name;
// jim.log();

// 联合类型（Union Types）

function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
console.log(padLeft("Hello World", 4));
// 联合类型表示一个值可以是几种类型之一。 我们用竖线（ |）分隔每个类型，所以 number | string | boolean表示一个值可以是 number， string，或 boolean。
// 一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。
// interface Bird {
//     fly();
//     layEggs();
// }

// interface Fish {
//     swim();
//     layEggs();
// }

// function getSmallPet(): Fish | Bird {
//     // ...
// }

// let pet = getSmallPet();
// pet.layEggs(); // okay
// pet.swim();    // errors


