import { concatenation } from "./concatenation";
const button = document.querySelector('button');
const input = document.querySelector('input');
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
let name1 = "Val";
if (typeof name1 === "string") {
    // console.log(name1);
}
name1.toUpperCase();
const event = "homework";
var Size;
(function (Size) {
    Size["Small"] = "S";
    Size["Medium"] = "M";
    Size["Large"] = "L";
})(Size || (Size = {}));
// console.log(Size.Small);
const size = Size.Large;
// console.log(size);
function add(num1, num2) {
    return num1 + num2;
}
// console.log('add :>> ', add(1, 4));
function sub(num1, num2) {
    console.log(num1 - num2);
}
// sub(1, 4);
// sub(4, 1);
function mult(num1, num2) {
    return num1 * num2;
}
function greet(user) {
    console.log('hello ' + user.name);
}
greet({ name: 'Bob' });
function greet2(name, age) {
    return {
        name,
        age
    };
}
console.log('greet2( "Valerii", 20 ) :>> ', greet2('Valerii', 20));
function startCar(car) {
    console.log('Started ' + car.name);
    car.start(car.color);
}
startCar({ name: 'BMW', color: 'red', start: (color) => console.log(color) });
//# sourceMappingURL=index.js.map