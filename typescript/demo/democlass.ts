// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello," + this.greeting;
//     }
// }
// let greeter = new Greeter('world');
// greeter.greet()

// class Animal {
//     move(distanceInMeters: number = 0) {
//         console.log("Animal moved ${distanceInMeters}m.");
//     }
// }
// class Dog extends Animal {
//     bark(){
//         console.log('Woof! Woof!');
//     }
// }
// const dog = new Dog();
// dog.bark();
// dog.move(10);
// dog.bark();

// class Animal {
//     name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
// class Snake extends Animal {
//     constructor(name: string) {
//         super(name);
//     }
//     move(distanceInMeters: number = 5) {
//         console.log("Slithering...")
//         super.move(distanceInMeters)
//     }
// }
// class Horse extends Animal {
//     constructor(name: string) {
//         super(name);
//     }
//     move(distanceInMeters = 45) {
//         console.log("Galloping ...");
//         super.move(distanceInMeters);
//     }
// }
// let sam = new Snake("Sammy the Python");
// let tom:Animal = new Horse("Tommy the Palomino");
// sam.move();
// tom.move(34);
//默认访问类型为public
// class Animal {
//     public name: string;
//     public constructor(theName: string) {
//         this.name = theName;
//     }
//     public move(distanceInMeters: number) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
//  class Animal {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
//当成员被标记成 private时，它就不能在声明它的类的外部访问
 // 错误: 'name' 是私有的.
// new Animal("Cat").name;
// class Animal {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
// class Rhino extends Animal {
//     constructor() {
//         super("Rhino");
//     }
// }
// class Employee {
//     private name: string;
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");
// animal = rhino;
// 错误: Animal 与 Employee 不兼容.
// animal = employee; 

// class Person {
//     protected name:string;
//     constructor(name:string){
//         this.name = name;
//     }
// }
// class Employee extends Person {
//     private department: string;
//     constructor(name: string, department:string){
//         super(name);
//         this.department = department;
//     }
//     public getElevatorPitch(){
//         return `Hello ,my name is ${this.name} and I work in ${this.department}`;
//     }
// }
// let howard = new Employee("Howard","Sales");
// console.log(howard.getElevatorPitch());
// console.log(howard.name);// 错误

//构造方法protected
// class Person {
//     protected name:string;
//     protected constructor(name:string){
//         this.name = name;
//     }
// }

// class Employee extends Person {
//     private department: string;
//     constructor(name: string, department:string){
//         super(name);
//         this.department = department;
//     }
//     public getElevatorPitch(){
//         return `Hello ,my name is ${this.name} and I work in ${this.department}`;
//     }
// }
// let howard = new Employee("Howard", "Sales");
// console.log(howard.getElevatorPitch());
// let john = new Person("John"); // 错误: 'Person' 的构造函数是被保护的.
//只读属性必须在声明时或构造函数里被初始化。
// class Octopus {
//     readonly name: string;
//     readonly numberOfLegs : number = 8;
//     constructor(theName:string){
//         this.name = theName;
//     }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name="Man with the 3-piece suit";


