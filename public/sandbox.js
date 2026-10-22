"use strict";
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 1,
    resourceType: ResourceType.BOOK, // much more readable
    data: { title: 'name of the wind' }
};
const docTwo = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { name: 'yoshi' }
};
// console.log(docOne, docTwo); // and we still get a unique number to identify the resource type based on its index in ResourceType enums
// tuples
// in typescript these are like arrays but they have a fixed type at a particular index
// recap of arrays, can assign any type at any index once defined (given they are all types typescript inferred)
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false];
let tup = ['ryu', 25, true]; // tuples HAVE to be defined like this
// let tup: [string, number, boolean] = [30, 'name', true]; // not allowed (does not reflect type positions we defined)
let tupTest; // or initialised
tupTest = ['a', 8, false]; // then defined
