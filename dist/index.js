import { concatenation } from "./concatenation";
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    });
}
let total = 100;
let name = "Valerii";
console.log(total, name);
let isActive = false;
console.log(isActive);
let empty = null;
let empty2 = undefined;
name = "5";
const arr = [1, 2, 3];
const arr2 = [1, 2, 3];
arr2.push(4);
const user = {
    name: "Valerii",
    age: 20,
};
const user2 = {
    name: "Valerii",
    age: 20,
};
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 4));
console.log(user);
//# sourceMappingURL=index.js.map