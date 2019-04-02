//
// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right
// }
// 数字枚举， Up使用初始化为 1。 其余的成员会从 1开始自动增长
// enum Direction {
//     Up ,
//     Down,
//     Left,
//     Right
// }
//现在， Up的值为 0， Down的值为 1等等
// enum ResponseStatus {
//     No = 0,
//     Yes = 1,
// }

// function respond(recipient: string, message: ResponseStatus): void {
//   // ...
// }
// respond("Princess Caroline", ResponseStatus.Yes);
// 字符串枚举
// enum Direction {
//   Up = "UP",
//   Down = "DOWN",
//   Left = "LEFT",
//   Right = "RIGHT"
// }

// 枚举成员使用 常量枚举表达式初始化。 常数枚举表达式是TypeScript表达式的子集，它可以在编译阶段求值。 当一个表达式满足下面条件之一时，它就是一个常量枚举表达式：
// 一个枚举表达式字面量（主要是字符串字面量或数字字面量）
// 一个对之前定义的常量枚举成员的引用（可以是在不同的枚举类型中定义的）
// 带括号的常量枚举表达式
// 一元运算符 +, -, ~其中之一应用在了常量枚举表达式
// 常量枚举表达式做为二元运算符 +, -, *, /, %, <<, >>, >>>, &, |, ^的操作对象。 若常数枚举表达式求值后为 NaN或 Infinity，则会在编译阶段报错。

// 联合枚举与枚举成员的类型
// 存在一种特殊的非计算的常量枚举成员的子集：字面量枚举成员。 字面量枚举成员是指不带有初始值的常量枚举成员，或者是值被初始化为

// 任何字符串字面量（例如： "foo"， "bar"， "baz"）
// 任何数字字面量（例如： 1, 100）
// 应用了一元 - 符号的数字字面量（例如： -1, -100）
// 当所有枚举成员都拥有字面量枚举值时，它就带有了一种特殊的语义。
enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

// let c: Circle = {
    // kind: ShapeKind.Square,
    //    ~~~~~~~~~~~~~~~~ Error!
    // radius: 100,
// }
// 运行时的枚举;
// enum E {
//     X, Y, Z
// }
// function f(obj: { X: number }) {
//   return obj.X;
// }

// Works, since 'E' has a property named 'X' which is a number.
// f(E);

// 反向映射;
// enum Enum {
//     A
// }
// let a = Enum.A;
// let nameOfA = Enum[a]; // "A"
// 生成的代码中，枚举类型被编译成一个对象，它包含了正向映射（ name -> value）和反向映射（ value -> name）。 引用枚举成员总会生成为对属性访问并且永远也不会内联代码。
// const枚举;
// const enum Enum {
//     A = 1,
//     B = A * 2
// }
// const enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }

// let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
// declare enum Enum {
//     A = 1,
//     B,
//     C = 2
// }
// 在正常的枚举里，没有初始化方法的成员被当成常数成员。 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
