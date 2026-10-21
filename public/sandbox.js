"use strict";
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
// easy to reuse type aliases in other functions that require that kind of type
const greetAgain = (user) => {
    console.log(`${user.name} says hello`);
};
