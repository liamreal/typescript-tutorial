"use strict";
// explicit types
let character; // want to initialise a variable but dont yet have a value
let age;
let isLoggedIn;
// age = 'luigi'; // cannot assign string to explicit number type
age = 30;
// isLoggedIn = 25; // same for others
isLoggedIn = true;
// arrays
let ninjas = []; // empty array of strings
ninjas.push('shaun');
// union types
let mixed = []; // array of strings and numbers
mixed.push('hello');
mixed.push(20);
// mixed.push(false); // error when booleans unless part of union type
console.log(mixed);
let uid; // can do same for variables, dont need parenthess when not an array
uid = '123';
uid = 123;
// uid = false; // cannot assign because not string|number
// objects
