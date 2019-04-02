// function identity(arg: number): number {
//     return arg;
// }

// function identity(arg: any): any {
//     return arg;
// }

// function identity < T > (arg: T): T {
//     return arg
// }
// 传入所有的参数，包含类型参数
// console.log(identity < string > ("myString"));
// 类型推论-- 即编译器会根据传入的参数自动地帮助我们确定T的类型
// console.log(identity("myString"));

// function loggingIdentity < T > (arg: T[]): T[] {
//     console.log(arg.length);
//     return arg;
// }

// function loggingIdentity<T>(arg:Array<T>):Array<T>{
//     console.log(arg.length);
//     return arg;
// }
//泛型类型
// function identity < T > (arg: T): T {
//     return arg
// }
// let myIdentity: < T > (arg: T) => T = identity;
// let myIdentity: < U > (arg: U) => U = identity
// let myIdentity: { < T > (arg: T): T} = identity;

// interface GenericIdentityFn<T> {
//   <T>(arg: T): T;
// }

// function identity<T>(arg: T): T {
//   return arg;
// }
// let myIdentity: GenericIdentityFn=identity;
// let myIdentity: GenericIdentityFn<number> = identity;
// 泛型类指的是实例部分的类型
// class GenericNumber<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }
// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function(x, y) {
//   return x + y;
// };
// let stringNumber = new GenericNumber<string>();
// stringNumber.zeroValue = "";
// stringNumber.add = function(x, y) {
//   return x + y;
// };
// console.log(stringNumber.add(stringNumber.zeroValue, "test"));

// 泛型约束
// interface LengthWise {
//   length: number;
// }
// function loggingIdentity<T extends LengthWise>(arg: T): T {
//   console.log(arg.length);
//   return arg;
// }
// loggingIdentity(3)
// loggingIdentity({ length: 3, value: 3 });

//在泛型约束中使用类型参数, 你可以声明一个类型参数，且它被另一个类型参数所约束
// function getProperty(obj: T, key: K) {
//   return obj[key];
// }
// let x = {a:1,b:2,c:3,d:4};
// getProperty(x, "a");
// 在泛型里使用类类型
// function create<T>(c: { new (): T }): T {
//   return new c();
// }

// class BeeKeeper {
//     hasMask: boolean;
// }

// class ZooKeeper {
//     nametag: string;
// }

// class Animal {
//     numLegs: number;
// }

// class Bee extends Animal {
//     keeper: BeeKeeper;
// }

// class Lion extends Animal {
//     keeper: ZooKeeper;
// }

// function createInstance<A extends Animal>(c: new () => A): A {
//     return new c();
// }

// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!


