// Explicit types
let char: string;
let age: number;
let isLoggedin: boolean;

// age = "Ahmed";
age = 25;
// char = 23;
char = "Ahmed";

// arrays

let arr1: string[];
// arr = [15, 26];
// arr1.push(26);
arr1 = ["Ahmed", "mohamed"];
let arr2: number[] = [];
arr2.push(26);
arr2.push(36);
console.log(arr1);
console.log(arr2);

// union types
let mixed: (number | string)[] = [];
mixed.push("Ahmed");
mixed.push(25);

console.log(mixed);

let uid: string | number;
uid = 36;
uid = "36";

// objects
let ninjaOne: object;
ninjaOne = {
    name: "Ahmed",
    age: 30,
};

let ninjaTwo: {
    name: string;
    age: number;
    isBlackBelt: boolean;
};
// ninjaTwo = {
//    name: 'Ahmed',
//    skill: 'someThing'
// }
ninjaTwo = {
    name: "Ahmed",
    age: 25,
    isBlackBelt: true,
};
