// GENERICS
// reusable blocks of code which can be used with different types

// usually T, but can be anything (like Java)
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let docOne = addUID({name: 'yoshi', age: 40});
// let docTwo = addUID({age: 20}); // not allowed since we restricted it to objects with at least a name property

console.log(docOne);
console.log(docOne.name); // properties preserved

// with interfaces
interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
}

const docThree: Resource<object> = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' } // allowed
}

const docFour: Resource<string> = {
    uid: 2,
    resourceName: 'animal',
    data: 'dog' // allowed
}

const docFive: Resource<string[]> = {
    uid: 3,
    resourceName: 'shoppingList',
    data: ['bread', 'milk', 'toilet roll']
}

console.log(docThree, docFour, docFive);


