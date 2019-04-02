interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}
let myObj = {
    size: 10,
    label: "Size 10 Object"
};
printLabel(myObj);

interface SquareConfig {
    color ? : string;
    width ? : number;
    [propName: string]: any
}

function createSquare(config: SquareConfig): {
    color: string;area: number
} {
    let newSquare = {
        color: "white",
        area: 100
    };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({
    color: "black"
});

interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = {
    x: 10,
    y: 20
};
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray < Number > = a;

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
//实现接口中定义的参数
// mySearch = function (source: string, subString: string) {
//     let result = source.search(subString);
//     return result > -1
// }
//函数中参数名不需要一致
// mySearch = function (src: string, sub: string) {
//     let result = src.search(sub);
//     return result > -1;
// }
//类型推断
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
}
//可索引的类型;
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ['Bob', 'Fred'];
let myStr: string = myArray[0];

//类类型
//实现接口
// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }
// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) {}
// }

interface ClockConstructor {
    new(hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {

    }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("tick tick");
    }
}
let digital = createClock(DigitalClock, 12, 7);
let analog = createClock(AnalogClock, 7, 32);

interface Shape {
    color: string;
}
// interface Square extends Shape {
//     sideLength: number;
// }
// let square = < Square > {};
// square.color = "blue";
// square.sideLength = 10;

interface PenStroken {
    penWidth: number;
}
interface Square extends Shape, PenStroken {
    sideLength: number;
}
let square = < Square > {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void
}

function getCounter(): Counter {
    let counter = < Counter > function (start: number) {};
    counter.interval = 123;
    counter.reset = function () {};
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;


class Control {
    private state: any
}
interface SelectableControl extends Control {
    select(): void;
}
class Button extends Control implements SelectableControl {
    select() {}
}
class TextBox extends Control {
    select() {};
}
// 错误：“Image”类型缺少“state”属性。
// class Image implements SelectableControl {
//     select(){};
// }
// class Location {

// }
