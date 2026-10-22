// GENERICS
// reusable blocks of code which can be used with different types

// usually T, but can be anything (like Java)
const addUID = <T>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
let docTwo = addUID('hello');

console.log(docOne);
console.log(docOne.name); // since we used generic, properties are preserved
console.log(docTwo); // can also do with any type, not just object, because of generics, but we dont want to attach a random id to this