// ENUMS

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
    uid: number;
    resourceType: ResourceType;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK, // much more readable
    data: { title: 'name of the wind' }
}

const docTwo: Resource<object> = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi' }
}

// console.log(docOne, docTwo); // and we still get a unique number to identify the resource type based on its index in ResourceType enums


// tuples
// in typescript these are like arrays but they have a fixed type at a particular index

// recap of arrays, can assign any type at any index once defined (given they are all types typescript inferred)
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false]

let tup: [string, number, boolean] = ['ryu', 25, true];

// tup[0] = 30; // not allowed
// tup[0] = false; // not allowed
tup[0] = 'ken'; // allowed

// tup[1] = 'hello'; // not allowed
tup[1] = 10; // allowed