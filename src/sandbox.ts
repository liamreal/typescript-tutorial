// GENERICS
// reusable blocks of code which can be used with different types

const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});

console.log(docOne);
// console.log(docOne.name); // not allowed here, cannot ensure name exists (since addUID takes in and returns any object)