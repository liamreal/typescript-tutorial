"use strict";
let greet; // can also specify type on definition
// greet = 'hello'; // still cannot assign to string since is Function type
greet = () => {
    console.log('hello, again');
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
// add(5, '10'); // cannot pass as string, ONLY as number
