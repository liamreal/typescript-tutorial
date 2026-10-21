
let age: any = 25; // can be any type

// USE CAREFULLY!!!
// basically revert typescript back to javascript
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'luigi' };
console.log(age);

let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);

// same with objects, here defining it fields to be any type
let ninja: { name: any, age: any };

ninja = {name: 'yoshi', age: 25};
console.log(ninja);

ninja = {name: 25, age: 'yoshi'};
console.log(ninja);
