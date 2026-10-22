// ENUMS

interface Resource<T> {
    uid: number;
    resourceType: number;
    data: T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: 3,
    data: { title: 'name of the wind' }
}

const docTwo: Resource<object> = {
    uid: 10,
    resourceType: 4,
    data: { name: 'yoshi' }
}





