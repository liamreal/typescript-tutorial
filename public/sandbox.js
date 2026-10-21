"use strict";
let greet;
// notice how name and greeting do not need to match a and b, just the type needs to match
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// // gives error since types do not match
// greet = (name: number, greeting: string) => {
//     console.log(`${name} says ${greeting}`);
// }
