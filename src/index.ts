import { concatenation } from "./concatenation";

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
  button.addEventListener('click', () => {
    concatenation(input.value, 'hello!');
  });
}

let total: number = 100;
let name: string = "Valerii";
console.log(total, name);
let isActive: boolean = false;
console.log(isActive);
let empty: null = null;
let empty2: undefined = undefined;
name = "5"
const arr: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];
arr2.push(4);

const user: { name: string; age: number } = {
  name: "Valerii",
  age: 20,
};
type User = {
  name: string;
  age: number;
};
const user2: User = {
  name: "Valerii",
  age: 20,
}

function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 4));
console.log(user);
