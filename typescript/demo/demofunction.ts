//函数
//named function
// function add(x, y) {
//     return x + y;
// }
//Anonymous function
// let myAdd = function (x, y) {
//     return x + y;
// }
// let z = 100;

// function addToZ(x, y) {
//     return x + y + z;
// }

//函数类型
//为函数添加类型
// function add(x: number, y: number): number {
//     return x + y;
// }
// let myAdd = function (x: number, y: number): number {
//     return x + y;
// }
//书写完整函数类型 函数类型包含两部分：参数类型和返回值类型
//没有返回任何值  必须指定返回值类型为 void
// let myAdd: (x: number, y: number) => number =
//     function (x: number, y: number): number {
//         return x + y;
//     }
//推断类型
// myAdd has the full function type
// let myAdd = function (x: number, y: number): number { return x + y; };

// The parameters `x` and `y` have the type number
// let myAdd: (baseValue: number, increment: number) => number =
//     function (x, y) { return x + y; };

// 可选参数和默认参数

// TypeScript里的每个函数参数都是必须的
// function buildName(firstName: string, lastName: string) {
//     return firstName + " " + lastName;
// }
// let result1 = buildName("Bob");                  // error, too few parameters
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");         // ah, just right
// 在TypeScript里我们可以在参数名旁使用 ? 实现可选参数的功能

// function buildName(firstName:string,lastName?:string){
//     if(lastName){
//         return firstName +" "+lastName
//     }else{
//         return firstName
//     }
// }
// let result1 = buildName("Bob");                  // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result3 = buildName("Bob", "Adams");         // ah, just right
// 在TypeScript里，我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined时。 它们叫做有默认初始化值的参数。
// function buildName(firstName: string, lastName = "Smith") {
//     return firstName + " " + lastName;
// }

// let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
// let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
// let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
// let result4 = buildName("Bob", "Adams");         // ah, just right
// 剩余参数，你想同时操作多个参数，或者你并不知道会有多少参数传递进来。 剩余参数会被当做个数不限的可选参数。
// function buildName(firstName: string, ...restOfName:string[]){
//     return firstName+" "+restOfName.join(" ")
// }
// let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
// console.log(employeeName);











