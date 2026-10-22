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

console.log(docOne, docTwo); // and we still get a unique number to identify the resource type based on its index in ResourceType enums





