import { concatenation } from "./concatenation";

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  });
}

// let total: number = 100;
// let name: string = "Valerii";
// console.log(total, name);
// let isActive: boolean = false;
// console.log(isActive);
// let empty: null = null;
// let empty2: undefined = undefined;
// name = "5"
// const arr: number[] = [1, 2, 3];
// const arr2: Array<number> = [1, 2, 3];
// arr2.push(4);

// const user: { name: string; age: number } = {
//   name: "Valerii",
//   age: 20,
// };
// type User = {
//   name: string;
//   age: number | string;
// };


let name1: string = "Val";
if (typeof name1 === "string") {
  // console.log(name1);
}
name1.toUpperCase();
// console.log('name1 :>> ', name1);

// console.log(add(1, 4));


type eventType = "lesson" | "homework";
const event: eventType = "homework";

enum Size {
  Small = "S",
  Medium = "M",
  Large = "L",
}
// console.log(Size.Small);
const size: Size = Size.Large;
// console.log(size);


function add(num1: number, num2: number): number {
  return num1 + num2;
}
// console.log('add :>> ', add(1, 4));

function sub(num1: number, num2: number): void {
  console.log(num1 - num2);
}
// sub(1, 4);
// sub(4, 1);



function mult(num1: number, num2: number) {
  return num1 * num2;
}

type User3 = {
  name: string;
}
function greet(user: User3): void {
  console.log('hello ' + user.name);
}
greet({ name: 'Bob' });

type User4 = {
  name: string;
  age: number;
}
function greet2(name: string, age: number ): User4 {
  return {
    name,
    age
  }
}

console.log('greet2( "Valerii", 20 ) :>> ', greet2( 'Valerii', 20 ));

type Car = {
  name: string;
  price: number;
  color: string;
  start: (color: string) => (void);
};

function startCar(car: Car) {
  console.log('Started ' + car.name);
  car.start(car.color);
}

startCar({ name: 'BMW', price: 10000, color: 'red', start: (color) => console.log(color) });