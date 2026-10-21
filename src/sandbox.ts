let greet: Function; // can also specify type on definition

// greet = 'hello'; // still cannot assign to string since is Function type

greet = () => {
    console.log('hello, again');
}

const add = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b);
    console.log(c);
}

add(5, 10);
// add(5, '10'); // cannot pass as string, ONLY as number
add(1, 1, 20);
add(3, 4, 'yolo');

// can also explicitly define return type so easier to see at a glance
const minus = (a: number, b: number): number => {
    return a + b;
}

let result = minus(10, 7); // type inferred as number

// result = 'new'; // cannot change type from number