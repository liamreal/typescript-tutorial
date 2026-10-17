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
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
ninjaOne = []; // can do this because an array is an object
// to be more specific, can define object to have certain properties
let ninjaTwo;
// ninjaTwo = []; // cannot define as array
ninjaTwo = { name: 'mario', age: 20, beltColour: 'black' }; // can define with EXACT properties previously initialised
