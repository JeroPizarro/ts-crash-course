console.log('Hello world!');

//Basic types
const num: number = 10;
const str: string = 'Hello Jero!';
const bool: boolean = true;
const arr: number[] = [1, 2, 3];
const anyArr: any = ['Hello', 10, true];
const obj: object = {
  id: 1,
  name: 'John Doe',
};
const objArr: object[] = [{ isTrue: true }, { isFalse: false }];

//Tuple - specify type
const person: [number, string, boolean] = [29, 'John', true];
const tupleArr: [string, number][] = [
  ['Joe', 18],
  ['Mary', 25],
];

//Union - more than one type
//const id: string|number = 145;
const id: string | number = 'as145';

//Enums - define a set of named constants
//each const will have a constant number/string attached
enum Direction {
  Up, //0
  Down,
  Left,
  Right, //3
}

//Objects - using Types
type User = {
  id: string;
  name: string;
  age: number;
};

//use types with unions or tuples
type Point = number | string;

const user: User = {
  id: 'sha192',
  name: 'Lily',
  age: 35,
};

//Type assertion - explicit call to compiler to treat an entity as different type
const cid: any = 122;
//const costumerId: number = <number>cid;
const costumerId = cid as number;

//Fcns
function addNum(x: number, y: number): number {
  return x + y;
}

function log(msg: number | string): void {
  console.log(msg);
}

//Interfaces - custom type, specific structure for obj/fcn, it does't admit unions or tuples
interface superUser {
  readonly id: number; //non editable prop
  name: string;
  age?: number; //optional
}
const superUser: superUser = {
  id: 58,
  name: 'Clark',
};

interface MatchFcn {
  (x: number, y: number): number;
}
const multiplyNum: MatchFcn = (x, y) => x * y;
const substracNum: MatchFcn = (x, y) => x - y;

//--------------
interface PersonInterface {
  id: number;
  name: string;
  age?: number;
}

//Classes
class Person implements PersonInterface {
  /*prop modifiers - 
    public 
    private (access just in class)
    protected (access in class and extended classes)
  */
  //protected id; - can't use prop mofiers if you implement interface
  id;
  name;
  age;
  lastName;

  constructor(id: number, name: string, lastName: string, age?: number) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  register(): void {
    console.log(`Person ${this.id}, ${this.name} ${this.lastName}`);
  }
}

const personOne: Person = new Person(123, 'Jamie', 'Soprano');
//console.log(personOne.id); //non accessible
personOne.register();

//Subclass
class Employee extends Person {
  position: string;
  constructor(
    id: number,
    name: string,
    lastName: string,
    position: string,
    age?: number
  ) {
    super(id, name, lastName, age);
    this.position = position;
  }
}

const employeeOne: Employee = new Employee(
  10,
  'Mike',
  'Tyson',
  'Former Box fighter',
  65
);

//Generics - use it to build reusable components
//use T as placeholder for types
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}
const numArr = getArray<number>([1, 2, 3, 4, 5]);
//const strArr = getArray<string>(['Jero', 'Lula', 'San', 'Tete', 1]);
