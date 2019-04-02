// 导入一个模块中的某个导出内容;
// import { ZipCodeValidator } from "./ZipCodeValidator";
// let myValidator = new ZipCodeValidator();

// import { ZipCodeValidator as ZCV } from "./ZipCodeValidator";
// let myValidator = new ZCV();

// 将整个模块导入到一个变量，并通过它来访问模块的导出部分
// import * as validator from "./ZipCodeValidator";
// let myValidator = new validator.ZipCodeValidator();

// 和函数声明可以直接被标记为默认导出。 标记为默认导出的类和函数的名字是可以省略的。
// import validator from "./ZipCodeValidator";
// let myValidator = new validator();

// import validate  from "./StaticZipCodeValidator";
// let strings = ["Hello","98053","101"];
// strings.forEach(s => {
//     console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
// })

// import num from "./OneTwoThree";
// console.log(num);

// import zip = require("./ZipCodeValidator");
// Some samples to try
// let strings = ["Hello", "98052", "101"];
// Validators to use
// let validator = new zip();
// Show whether each string passed each validator
// strings.forEach(s => {
//     console.log(`"${s}" - ${validator.isAcceptable(s) ? "matches" : "does not match"}`);
// });

// import { StringValidator } from "./Validation";
// import { ZipCodeValidator } from "./ZipCodeValidator";
// import { LettersOnlyValidator } from "./LettersOnlyValidator";

// Some samples to try
// let strings = ["Hello", "98052", "101"];

// Validators to use
// let validators: { [s: string]: StringValidator; } = {};
// validators["ZIP code"] = new ZipCodeValidator();
// validators["Letters only"] = new LettersOnlyValidator();

// Show whether each string passed each validator
// strings.forEach(s => {
//     for (let name in validators) {
//         console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
//     }
// });


// <reference path="node.d.ts"/>
// import * as URL from "url";
// let myUrl = URL.parse("http://www.typescriptlang.org");