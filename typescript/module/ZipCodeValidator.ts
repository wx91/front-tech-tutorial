import { StringValidator } from "./Validation";

export const numberRegexp = /^[0-9]+$/;
// export default class ZipCodeValidator implements StringValidator {
//   isAccepttable(s: string) {
//     return s.length == 5 && numberRegexp.test(s);
//   }
// }
// export class ZipCodeValidator implements StringValidator {
//     isAccepttable(s: string) {
//         return s.length == 5 && numberRegexp.test(s);
//     }
// }
class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length == 5 && numberRegexp.test(s);
  }
}
export { ZipCodeValidator};
// export {ZipCodeValidator as mainValidator}

// export =语法定义一个模块的导出对象。 这里的对象一词指的是类，接口，命名空间，函数或枚举。
// 若使用export = 导出一个模块，则必须使用TypeScript的特定语法import module = require("module")来导入此模块。

// export = ZipCodeValidator;
