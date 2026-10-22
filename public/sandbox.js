"use strict";
// GENERICS
// reusable blocks of code which can be used with different types
// usually T, but can be anything (like Java)
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
// let docTwo = addUID({age: 20}); // not allowed since we restricted it to objects with at least a name property
console.log(docOne);
console.log(docOne.name); // properties preserved
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' } // no problems here
    // data: 'shaun' // not allowed, has to be an object, can be allowed by using generics
};
