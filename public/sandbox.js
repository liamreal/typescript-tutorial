"use strict";
// GENERICS
// reusable blocks of code which can be used with different types
// usually T, but can be anything (like Java)
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
// let docTwo = addUID('hello'); // not allowed now that we made the method require a type that extends object
console.log(docOne);
console.log(docOne.name); // now properties are still preserved and we can do this to any object type
