"use strict";
console.log('Hello world!');
const num = 10;
const str = 'Hello Jero!';
const bool = true;
const arr = [1, 2, 3];
const anyArr = ['Hello', 10, true];
const obj = {
    id: 1,
    name: 'John Doe',
};
const objArr = [{ isTrue: true }, { isFalse: false }];
const person = [29, 'John', true];
const tupleArr = [
    ['Joe', 18],
    ['Mary', 25],
];
const id = 'as145';
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
const user = {
    id: 'sha192',
    name: 'Lily',
    age: 35,
};
const cid = 122;
const costumerId = cid;
function addNum(x, y) {
    return x + y;
}
function log(msg) {
    console.log(msg);
}
const superUser = {
    id: 58,
    name: 'Clark',
};
const multiplyNum = (x, y) => x * y;
const substracNum = (x, y) => x - y;
class Person {
    constructor(id, name, lastName, age) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    register() {
        console.log(`Person ${this.id}, ${this.name} ${this.lastName}`);
    }
}
const personOne = new Person(123, 'Jamie', 'Soprano');
personOne.register();
class Employee extends Person {
    constructor(id, name, lastName, position, age) {
        super(id, name, lastName, age);
        this.position = position;
    }
}
const employeeOne = new Employee(10, 'Mike', 'Tyson', 'Former Box fighter', 65);
function getArray(items) {
    return new Array().concat(items);
}
const numArr = getArray([1, 2, 3, 4, 5]);
