interface Named {
  name: string;
}
// class Person {
//   name: string;
// }
// let p:Named;
// OK, because of structural typing
// p = new Person();
// 关于可靠性的注意事项;
// 那么y至少具有与x相同的属性; 检查函数参数时使用相同的规则：
// let x: Named;
// y's inferred type is { name: string; location: string; }
// let y = { name: "Alice", location: "Seattle" };
// x = y;

// function greet(n: Named) {
//   console.log("Hello, " + n.name);
// }
// greet(y);
// 比较两个函数;相同的属性;
// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;
// y = x; // OK
// x = y; // Error





